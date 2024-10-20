const express = require("express");
const app = express();
require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 8081;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require("body-parser");

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use(bodyParser.json());

app.use('/tasks', TaskRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})