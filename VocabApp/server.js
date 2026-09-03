import express from 'express';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3232;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.use('/', (_req, res) => {
    res.send("VocabApp WIP..")
})

app.listen(PORT, function () {
    console.log(`Application running on http://localhost:${PORT}.`);
})