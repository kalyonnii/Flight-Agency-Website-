const express = require("express");
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

client.connect().then(()=>{
  console.log("Database is connected successfully")
})
app.get('/',(req,res)=>{
    res.send('hello world!');
})

app.post('/search', (req,res)=>{
  const {from, to} = req.body;
  Flights.findOne({from, to})
      .then(()=>{
          if(req.body.urlapi){
              res.send(req.body.urlapi);
          } else{
              res.status(400).send("No flights found");
          }
      });
});

app.listen(3000,()=>{
    console.log(`sever is running`)
})