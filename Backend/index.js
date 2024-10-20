const express = require("express");
const app = express();
require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 8081;


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})