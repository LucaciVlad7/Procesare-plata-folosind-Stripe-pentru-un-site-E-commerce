// netlify/functions/checkout-session.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Main handler for the Netlify Function
exports.handler = async (event, context) => {
    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    // Netlify Functions pass query parameters via event.queryStringParameters
    const sessionId = event.queryStringParameters.session_id || event.queryStringParameters.sessionId;
    
    if (!sessionId) {
        return { 
            statusCode: 400, 
            body: JSON.stringify({ error: 'Missing session_id query parameter' }) 
        };
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['payment_intent', 'line_items', 'customer']
        });

        // --- Payment Error Handling Logic (From your original code) ---
        if (session.payment_status === 'unpaid' || 
            (session.payment_intent && session.payment_intent.status === 'requires_payment_method')) {
            
            let errorMessage = 'Plata nu a fost procesată.';
            
            if (session.payment_intent && session.payment_intent.last_payment_error) {
                const error = session.payment_intent.last_payment_error;
                errorMessage = error.message || errorMessage;
            }
            
            session.payment_error = {
                message: errorMessage,
                code: session.payment_intent?.last_payment_error?.code || 'payment_failed'
            };
        }
        // -------------------------------------------------------------
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(session),
        };
    } catch (err) {
        console.error('Stripe Session Retrieval Error:', err.message);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: err.message || 'Server error retrieving checkout session.' }),
        };
    }
};