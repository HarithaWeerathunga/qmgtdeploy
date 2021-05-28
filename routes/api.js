const express = require('express');


const router = express.Router();

const BlogPost = require('../models/blogPost');


const videos = [
    {
        id: 0,
        name: 'Video 1'
    },
    {
        id: 1,
        name: 'Video 2'
    },
    {
        id: 2,
        name: 'Video 3'
    }

]

router.get('/videos', (req,res) => res.json(videos));



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


router.post('/save', (req,res) => {

    console.log('Body :', req.body);

    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if(error){
            res.status(500).json({msg:'internal server error'});
            return;
        }

        return res.json({
            msg: 'your data has been saved'
        });
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