import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello! This is working!");
});

router.post("/upload", (req, res) => {
    res.send("File upload logic will go here!");
});

export default router;