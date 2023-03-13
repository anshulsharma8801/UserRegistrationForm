const express = require('express')
const dotenv = require('dotenv');
const path = require('path')
const mongoose = require('mongoose')
const connectDB = require('./config/db');

const app = express()
dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
  

app.get('/', (req,res,next) => {
    res.json({"hello":"successful"});

})

app.use('/api/users/', require('./routes/userRoutes'))

app.use((err, req, res, next) => {
    res.status(500).json(err);
})

// const PORT = 5000
app.listen(process.env.PORT, console.log(`Server running on ${process.env.PORT}`))