// netlify/functions/create-checkout-session.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Main handler for the Netlify Function
exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        // Netlify Functions require the body to be parsed from the event object
        const data = JSON.parse(event.body);
        const origin = event.headers.origin || 'https://lagarajshop.ro'; // Fallback to your main domain

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
            line_items: data.items.map(item => ({ // Use 'data.items' instead of 'req.body.items'
                price_data: {
                    currency: 'ron',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100), // Convert to cents
                },
                quantity: item.quantity,
            })),
            // Use origin for dynamic success/cancel URLs
            success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}`,
        });

        // Return the URL as a JSON response
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: session.url }),
        };
    } catch (err) {
        console.error('Stripe Checkout Error:', err.message);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: err.message || 'Server error creating checkout session.' }),
        };
    }
};