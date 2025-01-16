const express = require('express');
const bodyParser = require('body-parser');
const logToConsole = require('./middleware/logToConsole');
const saveToFile = require('./middleware/saveToFile');

const app = express();
const PORT = process.env.PORT || 7890;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let vocXdata;

app.get('/', (req, res) => {
    res.render("index.ejs", {
        vocX: vocXdata
    });
})

app.post("/more", (req, res) => {
    logToConsole(req.body.details);
    saveToFile(req.body.details);
    switch (req.body.details) {
        case "hone":
            vocXdata = require('./string.json')[0];
            break;
        case "misguided":
            vocXdata = require('./string.json')[1];
            break;
        case "virtuoso":
            vocXdata = require('./string.json')[2];
            break;
        case "omit":
            vocXdata = require('./string.json')[3];
            break;
        case "isle":
            vocXdata = require('./string.json')[4];
            break;
        case "mnemonic":
            vocXdata = require('./string.json')[5];
            break;
        case "bypass":
            vocXdata = require('./string.json')[6];
            break;
        case "misconstrue":
            vocXdata = require('./string.json')[7];
            break;
        case "abate":
            vocXdata = require('./string.json')[8];
            break;
        case "pivotal":
            vocXdata = require('./string.json')[9];
            break;
        case "skewed":
            vocXdata = require('./string.json')[10];
            break;
        case "reprimand":
            vocXdata = require('./string.json')[11];
            break;
        case "denominator":
            vocXdata = require('./string.json')[12];
            break;
        case "rupture":
            vocXdata = require('./string.json')[13];
            break;
        case "comestibles":
            vocXdata = require('./string.json')[14];
            break;
        case "inaugural":
            vocXdata = require('./string.json')[15];
            break;
        case "harbinger":
            vocXdata = require('./string.json')[16];
            break;
        case "belabor":
            vocXdata = require('./string.json')[17];
            break;
        case "leash":
            vocXdata = require('./string.json')[18];
            break;
        default:
            break;
    }
    res.redirect('/');

})

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}.`)
});


