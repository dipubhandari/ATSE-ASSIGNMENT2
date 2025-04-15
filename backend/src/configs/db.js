
const mongoose = require('mongoose')
require("dotenv").config()
module.exports = () => {
 const connect = mongoose.connect(
    process.env.DATABASE
  )
  if(connect){
    console.log("db connected");
  }
  else{
    console.log("unable to connect db");
  }
}
