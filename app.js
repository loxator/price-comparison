const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const route = require('./routes/route');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);
app.use(express.static(path.join(__dirname,'public')));

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/itemList');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to DB mongodb @ 27017');
})


app.get('/',(req,res) => {
    res.send('Hello World');
});

app.listen(3000, ()=> {
    console.log('Server is running')
})