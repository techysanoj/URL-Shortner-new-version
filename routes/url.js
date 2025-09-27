const express = require('express');

const {handleGenerateShortURL, handleGetShortURL, handleGetURLStats, handleGetHTMLurl} = require('../controller/url');

const router = express.Router();

router.post('/', handleGenerateShortURL);

router.get('/:shortId', handleGetShortURL);

router.get('/:shortId/stats', handleGetURLStats);

router.get('/test', handleGetHTMLurl); // here /url/test will not work because it will be treated as /url/:shortId

module.exports = router;