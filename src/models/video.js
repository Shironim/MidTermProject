import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
  video_id:{
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  shop_name:{
    type:String,
    required:true
  },
  video_title:{
    type:String,
    required:true
  },
})
const Videos = mongoose.model("videos", videoSchema)

export default Videos;