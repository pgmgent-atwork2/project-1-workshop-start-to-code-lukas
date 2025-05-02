import express from "express";

const router = express.Router();

router.get("/api", (req, res) => {
    res.send("API is working!");
});

router.post("/api/upload", (req, res) => {
    res.send("File upload logic will go here!");
});

export default router;