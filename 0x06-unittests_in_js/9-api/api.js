const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const cartId = req.params.id;
    if (/^\d+$/.test(cartId)) {
        res.send('Payment methods for cart ${cartId}');
    } else {
        res.status(404).send('Not found');
    }
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});