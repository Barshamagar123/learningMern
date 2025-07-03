const mongoose=require("mongoose")
const registerSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },

    email:{
        type:String
    },
    password:{
        type:String
    }
})
const Register= mongoose.model("Register",registerSchema)
module.exports=Register