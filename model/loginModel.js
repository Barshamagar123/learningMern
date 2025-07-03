const mongoose=require("mongoose")
const storySchema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const Story=mongoose.model("Story",storySchema)
module.exports=Story