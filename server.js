const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080;


const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.7gwjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const routes = require('./routes/api');


mongoose.connect(MONGODB_URI || 'mongodb://localhost/merndb', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

mongoose.connection.on('connected', ()=> {
    console.log("Mongoose is connected");
});


//http request logger
app.use(morgan('tiny'));
app.use('/api', routes)


app.listen(PORT, console.log(`server is starting at ${PORT}`));