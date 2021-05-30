const mongoose = require('mongoose');



// Schema
const Schema = mongoose.Schema;
const VideoAnalyticSchema = new Schema({
    Time : Date,
    qlength: Number,
    cashierAvailability: Number,
    videoID: Number,
    timeInSecond: String,
    averageWaitingTime: Number,
    vid: String
}, {
    collection : 'analytics'
});


//model
const VideoAnalytic = mongoose.model('VideoAnalytic', VideoAnalyticSchema);

module.exports = VideoAnalytic;