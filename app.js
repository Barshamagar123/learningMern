const express = require("express")
const app = express()
require('dotenv').config();
const connectToDatabase = require("./database/index.js");
const Book = require("./model/bookModel.js");
const Story = require("./model/loginModel.js");
connectToDatabase()
app.use(express.json());


app.get("/", (request, response) => {
    response.status(200).json({
        "message": "success"
    })
})
app.post("/book",async(request,response)=>{
    const {bookName,bookPrice, isbnNumber,authorName,publishAt}=request.body
   await Book.create({
        bookName:bookName,
        bookPrice:bookPrice,
        isbnNumber:isbnNumber,
        authorName:authorName,
        publishAt:publishAt

        
    })
    response.json({
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
    response.status(200).json({
        "message":"story has been created"
    })
})
app.listen(3000, () => {
            console.log("backend has started at port number 3000")
        })