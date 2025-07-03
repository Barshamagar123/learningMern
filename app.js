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

//all read
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
    const book=await Book.findById(id)//findById le object return garxa
    response.status(201).json({
        message: "single book fetched succesfykky",
        data :book
        
    })
})
app.listen(3000, () => {
            console.log("backend has started at port number 3000")
        })