This is the one for the backend.

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// const { response } = require('express');
const stripe = require('stripe')('yourstripekeyhere');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', ( request, response ) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {

    const total = request.query.total;
    console.log('in index.js functions Payment Request Received for the amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})

exports.api = functions.https.onRequest(app);
