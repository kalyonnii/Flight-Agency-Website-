const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');


const app = express();

const url = "mongodb+srv://karthika:karthika@cluster0.guuzjnf.mongodb.net/?retryWrites=true&w=majority";

const dbName = 'test';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// client.connect().then(()=>{
//   console.log("Database is connected successfully")
// })
app.get('/',(req,res)=>{
    res.send('hello world!');
})

app.post('/flights', async (req, res) => {
    try {
        // Get the from and to destinations from the request body
        const { from, to } = req.body;

        // Connect to the MongoDB database
        await client.connect();
        const db = client.db(dbName);

        // Search for flights in the collection based on the provided destinations
        const flights = await db.collection('Flights').find({ from, to }).toArray();

        if (flights.length === 0) {
            return res.status(404).json({ message: 'No flights found for the specified destinations' });
        }

        // Prepare the response with brand name and price
        const response = {
            flights: flights.map(flight => ({
                brand: flight.details.brand,
                price: flight.details.price,
                // Include other flight details if needed
            })),
        };

        res.json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
});

app.listen(3000,()=>{
    console.log(`sever is running`)
})