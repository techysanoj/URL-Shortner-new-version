const express = require('express');
const path = require('path')
const {connectMongoDB} = require('./connection');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const staticRoute = require("./routes/staticRouter");

connectMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => console.log('MongoDB connected'));

const app = express();
const PORT = 8001;

app.set("view engine", "ejs"); // it tells that we are using ejs as view engine

app.set('views', path.resolve('./views')); // it tells that our views are in views folder

app.use(express.json());
app.use(express.urlencoded({extended: false})); // it will parse the urlencoded data

app.use('/url', urlRoute); 
app.use('/', staticRoute); // it will serve static files from public folder

// app.use('/:shortID', handleGetShortURL);

// app.use('/:shortID/stats', handleGetURLStats);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));