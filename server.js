const express = require("express");
const { MongoClient } = require('mongodb');
var dotenv = require('dotenv');
dotenv.config();
const app = express();

const uri = "mongodb+srv://karthika:karthika@cluster0.guuzjnf.mongodb.net/?retryWrites=true&w=majority";
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