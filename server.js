const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080;


const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.7gwjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI || 'mongodb://localhost/merndb', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

mongoose.connection.on('connected', ()=> {
    console.log("Mongoose is connected");
})


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title : String,
    body: String,
    date:{
        type : String,
        default : Date.now()
    }
});


//model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// save data to our mongodb database
const data = {
    title : 'haritha',
    body: 'best'
};


const newBlogPost = new BlogPost(data);
// newBlogPost.save((error) => {
//     if(error){
//         console.log('error happened');
//     }
//     else{
//         console.log('data has been saved')
//     }
// });



//http request logger
app.use(morgan('tiny'));

app.get('/api', (req,res) => {


    BlogPost.find({})
    .then((data)=>{
        console.log('Data', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('Error' , error)
    });
    
});


app.get('/api/name', (req,res) => {
    const data = {
        username: 'weerathunga',
        age: 21
    };
    res.json(data);
});


app.listen(PORT, console.log(`server is starting at ${PORT}`));