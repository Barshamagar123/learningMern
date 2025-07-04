const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        unique: true
    },
    bookPrice:{
        type:Number,
        unique: true
    },
    isbnNumber:{
        type: Number
    },
    authorName:{
        type:String
    },
    publishAt:{
        type:String
    },
    publication:{
        type:String
    }
})
const Book=mongoose.model('Book',bookSchema)
module.exports=Book
