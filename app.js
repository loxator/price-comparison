const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const route = require('./routes/route');
const seeder = require('./routes/seeder/Items');
const items = require('./routes/itemRoutes');
const categories = require('./routes/categoryRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);
app.use('/seeder',seeder);
app.use(express.static(path.join(__dirname,'public')));
app.use('/items', items);
app.use('/categories', categories);
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