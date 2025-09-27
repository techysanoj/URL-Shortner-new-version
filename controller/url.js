const {nanoid} = require('nanoid');

const URL = require('../models/url');

const home = 'home'; // using this we can get home.ejs file from views folder

async function handleGenerateShortURL(req, res) {
    // we will use short id package
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'URL is required'});

    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    });

    return res.render('home', {
        id: shortId,
    })
    // return res.json({shortURL: `${shortId}`});
}

async function handleGetShortURL(req, res) {
    const shortId = req.params.shortId;
    const urlData = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })

    if(!urlData) return res.status(404).json({error: 'URL not found'});
    res.redirect(urlData.redirectURL);
    // return res.json({url: urlData.redirectURL});
}

async function handleGetURLStats(req, res) {
    const shortID = req.params.shortId;

    const urlData = await URL.findOne({
        shortId: shortID
    });
    if(!urlData) return res.status(404).json({error: 'URL not found'});

    const totalVisits = urlData.visitHistory.length;

    return res.status(200).json({"totalVisits": totalVisits, visitHistory: urlData.visitHistory});

}

async function handleGetHTMLurl(req, res) {
    const allUrl = await URL.find({});

    return res.render(home, {
        urls: allUrl,
    }); // it will render our home view, we can send the data as second argument
}

module.exports = {
    handleGenerateShortURL,
    handleGetShortURL,
    handleGetURLStats,
    handleGetHTMLurl
};