const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(__dirname)); // Serve all files from root directory

//test
// merge mereu: 4242 4242 4242 4242
// Card care va fi întotdeauna respins: 4000000000000002
// Card cu fonduri insuficiente: 4000000000009995
// Card raportat ca pierdut: 4000000000009987

// Create Stripe Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['RO']
      },
      phone_number_collection: {
        enabled: true
      },
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: 'ron',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      })),
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}`,
    });
    
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Retrieve Stripe checkout session
app.get('/checkout-session', async (req, res) => {
  const sessionId = req.query.session_id || req.query.sessionId;
  if (!sessionId) return res.status(400).json({ error: 'Missing session_id query parameter' });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent', 'line_items', 'customer']
    });
    
    // Add payment failure information to the response
    if (session.payment_status === 'unpaid' || 
        (session.payment_intent && session.payment_intent.status === 'requires_payment_method')) {
      
      let errorMessage = 'Plata nu a fost procesată.';
      
      // Get more detailed error if available
      if (session.payment_intent && session.payment_intent.last_payment_error) {
        const error = session.payment_intent.last_payment_error;
        errorMessage = error.message || errorMessage;
      }
      
      // Add error details to the session object
      session.payment_error = {
        message: errorMessage,
        code: session.payment_intent?.last_payment_error?.code || 'payment_failed'
      };
    }
    
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add this webhook handler to your server.js file
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Use your webhook signing secret from Stripe Dashboard
    event = stripe.webhooks.constructEvent(req.body, sig, 'whsec_your_webhook_secret');
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle payment failure events
  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object;
    console.log(`❌ Payment failed: ${paymentIntent.id}`);
    console.log(`Error message: ${paymentIntent.last_payment_error?.message || 'No error message'}`);
    
    // You could store this information in a database for later retrieval
    // or send an email notification to the customer
    // Example: await sendPaymentFailureEmail(paymentIntent.receipt_email, paymentIntent.id);
  }

  res.send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
