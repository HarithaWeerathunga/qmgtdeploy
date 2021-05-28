const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080;

//http request logger
app.use(morgan('tiny'));

app.get('/api', (req,res) => {
    const data = {
        username: 'haritha',
        age: 21
    };
    res.json(data);
});


app.get('/api/name', (req,res) => {
    const data = {
        username: 'weerathunga',
        age: 21
    };
    res.json(data);
});


app.listen(PORT, console.log(`server is starting at ${PORT}`));