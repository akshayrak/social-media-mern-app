import mongoose from 'mongoose'    //importing mongoose

//database schema
const postSchema = new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type: Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }

})

//creating a model using schema
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage   //exporting model