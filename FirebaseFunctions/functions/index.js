const functions = require("firebase-functions");
const stripe = require('stripe')('sk_test_51JssCMSHoIau0eIWDNrzd0AowBus5pNHByIV0tege7jzAXRhJd5bO74yHrVOiGVrMaicJLC9e1j737TwuXkX2JCF00ZCXYcgOD')
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.stripeCheckoutWithoutDbQueries = functions.https.onCall(async (data, context) => {
    var price = 20;
    console.log('data: ', data);
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            name: 'Pro Subscription',
            description: 'You will have access to all pro videos',
            amount: Math.round(price * 100),                // round to the nearest whole number so we don't have float errors
            currency: 'usd',
            quantity: 1

        }],
        mode: 'payment',
        success_url: 'http://localhost:4200/courses',
        cancel_url: 'http://localhost:4200/home',
    });

    return session.id;
})
