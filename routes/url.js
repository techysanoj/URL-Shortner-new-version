const express = require('express');

const {handleGenerateShortURL, handleGetShortURL, handleGetURLStats} = require('../controller/url');

const router = express.Router();

router.post('/url', handleGenerateShortURL);

router.get('/:shortId', handleGetShortURL);

router.get('/:shortId/stats', handleGetURLStats);

module.exports = router;