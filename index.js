const express = require('express');
const {connectMongoDB} = require('./connection');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const { handleGetShortURL, handleGetURLStats } = require('./controller/url');

connectMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => console.log('MongoDB connected'));

const app = express();
const PORT = 8001;

app.use(express.json());

app.use('/', urlRoute); 

// app.use('/:shortID', handleGetShortURL);

// app.use('/:shortID/stats', handleGetURLStats);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));