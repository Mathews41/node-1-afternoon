const express = require('express');
const getProduct = require('./getProduct')
const getProducts = require('./getProducts')

const app = express();




app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(3006, () => {
    console.log('chillen');
});