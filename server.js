const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for your frontend
app.use(cors({ origin: 'https://vite-xyvu.vercel.app' }));

// Route to fetch an image
app.get('/get-image', (req, res) => {
    const imageUrl = req.query.url;
    
    if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
    }

    res.json({ message: "CORS enabled, request successful!", imageUrl });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
