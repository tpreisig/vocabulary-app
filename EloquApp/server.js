import express from 'express';
import 'dotenv/config.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3232;

console.log(PORT);

const app = express();

const data = (await import('../data/vocabulary.json', { with: { type: 'json' } })).default || [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

let eloqData = data[0] || null;

app.get('/', (_req, res) => {
    res.render(join(__dirname, 'views', 'index.ejs'), {
        voc: eloqData,
    });
})

app.post("/more", (req, res) => {
    console.log(req.body.details);

    switch (req.body.details) {
        case "beneficence":
            eloqData = data[0];
            break;
        case "concession":
            eloqData = data[1];
            break;
        case "obscuration":
            eloqData = data[2];
            break;
        case "consecutive":
            eloqData = data[3];
            break;
        case "succeed":
            eloqData = data[4];
            break;
        case "deduction":
            eloqData = data[5];
            break;
        case "adulate":
            eloqData = data[6];
            break;
        case "inaugural":
            eloqData = data[7];
            break;
        case "yield":
            eloqData = data[8];
            break;
        case "commotion":
            eloqData = data[9];
            break;
        case "curtail":
            eloqData = data[10];
            break;
        case "disclosure":
            eloqData = data[11];
            break;
        case "dissent":
            eloqData = data[12];
            break;
        case "spry":
            eloqData = data[13];
            break;
    }
    res.redirect('/');

})

app.use((_req, res) => {
    res.status(404).redirect('/');
})

app.listen(PORT, function () {
    console.log(`Application running at http://localhost:${PORT}.`)
})

