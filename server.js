const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();


const corsOptions = {
    origin: "https://vite-silk-one.vercel.app", 
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
};

app.use(cors(corsOptions));

app.get("/get-image", async (req, res) => {
    const { id, url } = req.query;

    if (!id || !url) {
        return res.status(400).json({ error: "Missing id or url" });
    }

    try {

      const response = await axios.get(url, { responseType: "arraybuffer" });
        res.set("Content-Type", response.headers["content-type"]);
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching image:", error.message);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
