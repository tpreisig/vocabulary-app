import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

const data =
    (await import("../../data/vocabulary.json", { with: { type: "json" } })).default ??
    [];

const byId = new Map(data.map((entry) => [entry.id, entry]));
let currentWord = data[0] ?? null;

router.get("/", (_req, res) => {
    res.render("index", {
        vocX: currentWord,
        words: data,
    });
});

router.post("/more", (req, res) => {
    const id = req.body.details;
    const next = byId.get(id);

    if (next) {
        currentWord = next;
    }

    res.redirect("/");
});

export default router;
