const express = require('express');


const router = express.Router();

const BlogPost = require('../models/blogPost');


router.get('/', (req,res) => {


    BlogPost.find({})
    .then((data)=>{
        console.log('Data', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('Error' , error)
    });
    
});


router.get('/name', (req,res) => {
    const data = {
        username: 'weerathunga',
        age: 21
    };
    res.json(data);
});



module.exports = router;