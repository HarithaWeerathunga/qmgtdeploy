const express = require('express');

const fs = require('fs');


const router = express.Router();

const BlogPost = require('../models/blogPost');
const VideoAnalytic = require('../models/videoAnalytic');

const mongoose = require('mongoose');
const { collection } = require('../models/blogPost');
const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.7gwjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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

router.get('/videos', (req,res) =>{ 
    res.json(videos);

    console.log("video data are being fetched")

});


router.get('/video' , (req,res) => {
    console.log("videoooooooo")
    res.sendFile('assets/1.mp4', {root:__dirname})
})


router.get('/video/:id/data', (req, res) => {

    const id = parseInt(req.params.id, 10);
    const name = "haritha";
    console.log("video/id/data")
    console.log(id)
    res.json(videos);
});




router.get('/video/:id', (req, res) => {
    
    console.log("/video/id/------jjjjjj---");

    

    const path = `assets/${req.params.id}.mp4`;
    
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(path, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }

    
    
});


// router.get('/fromdb', (req,res) => {
//     mongoose.connect(MONGODB_URI, function(err,db){
//         if (err) throw err;
//         var col = db.collection('blogposts')
//         var arr = [];
//         collection.find({}, function(err,docs){
//             docs.each(function(err,doc){
//                 if(doc){
//                     console.log("prinitng doc");
//                     console.log(doc);
//                     arr.push(doc);
//                 }else{
//                     res.send(arr);
//                 }
//             })
//         })
//     })
// })

router.get('/blogdata', (req,res) => {


    BlogPost.find()
    .then(foundNotes => res.json(foundNotes))
    
});

router.get('/videodata', (req,res) => {


    VideoAnalytic.find()
    .then(foundAnalytics => res.json(foundAnalytics))
    
});


router.get('/videodata/:id/:time', (req,res) => {


    VideoAnalytic.find({vid: req.params.id, timeInSecond: req.params.time})
    .then(foundAnalytics => res.json(foundAnalytics))
    
});




// router.get('/blogdata', (req,res) => {


//     BlogPost.find({})
//     .then((data)=>{
//         console.log('Data', data);
//         res.json(data);
//     })
//     .catch((error)=>{
//         console.log('Error' , error)
//     });
    
// });




// router.post('/save', (req,res) => {

//     console.log('Body :', req.body);

//     const data = req.body;

//     const newBlogPost = new BlogPost(data);

//     newBlogPost.save((error) => {
//         if(error){
//             res.status(500).json({msg:'internal server error'});
//             return;
//         }

//         return res.json({
//             msg: 'your data has been saved'
//         });
//     });

    
// });



// router.get('/name', (req,res) => {
//     const data = {
//         username: 'weerathunga',
//         age: 21
//     };
//     res.json(data);
// });





module.exports = router;