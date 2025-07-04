const express = require("express")
const app = express()
require('dotenv').config();
const connectToDatabase = require("./database/index.js");
const Book = require("./model/bookModel.js");
const Story = require("./model/loginModel.js");
const Register = require("./model/registerModel.js");
connectToDatabase()
app.use(express.json());


app.get("/", (request, response) => {
    response.status(200).json({
        "message": "success"
    })
})
app.post("/book",async(request,response)=>{
    const {bookName,bookPrice, isbnNumber,authorName,publishAt,publication}=request.body
   await Book.create({
        bookName:bookName,
        bookPrice:bookPrice,
        isbnNumber:isbnNumber,
        authorName:authorName,
        publishAt:publishAt,
        publication:publication

        
    })
    response.status(201).json({
        "message":"books created successfully"
    })
    // console.log(request.body)
})
app.post("/story",async(request,response)=>{
    const {email,password}=request.body
   await Story.create({
        email:email,
        password:password
    })
    response.status(201).json({
        "message":"story has been created"
    })
})

//create of register
app.post("/register",async(request,response)=>{
    const {name,age,address,email,password}=request.body
   await Register.create({
        name:name,
        age:age,
        address:address,
        email:email,
        password:password
    })
    response.status(201).json({
        "message":"register created successfully"
    })
})

//display data of register

app.get("/register",async(request,response)=>{
   const registers= await Register.find()
    response.status(201).json({
        message:"registers are fetched successfully",
        dis: registers
    })
})


//all read of books
app.get("/book",async (request,response)=>{
   const books= await Book.find()//find le array return garxa

   response.status(201).json({
    "message":"books fetched successfully",
    data: books
   })
})
 
//single read 
app.get("/book/:id",async(request,response)=>{
    const id=request.params.id
    const book=await Book.findById(id)
    if(!book){
        response.status(404).json({
            message:"nothing found"
        })
    }
    else{
        response.status(201).json({
            message:"single book fetched successfully",
            data: book
        })
    }

})

//delete operation
app.delete("/book/:id",async(request,response)=>{
    const id=request.params.id
    await Book.findByIdAndDelete(id)
    response.status(200).json({
        message: "books deleted successfully"
    })
})

//update operation
app.patch("/book/:id",async(request,response)=>{
    const id=request.params.id;
    const {bookName,bookPrice,authorName,isbnNumber,publication,publishAt}=request.body
  await  Book.findByIdAndUpdate(id,{
    bookName,
    bookPrice,
    authorName,
    isbnNumber,
    publication,
    publishAt
  })
  response.status(200).json({
    message: 'updated successfully'
  })
})
app.listen(3000, () => {
            console.log("backend has started at port number 3000")
        })