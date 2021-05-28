const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080;

//http request logger
app.use(morgan('tiny'));

app.get('', (req,res) => {
    const data = {
        username: 'haritha',
        age: 21
    };
    res.json(data);
})