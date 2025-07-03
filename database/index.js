const connectionString="mongodb+srv://barsha:barsha@cluster0.bnl2nd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose=require("mongoose")
async function connectToDatabase(){
  await mongoose.connect(connectionString)
  console.log("connnected succesfully")
}
module.exports=connectToDatabase