const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for your frontend domain
app.use(cors({ origin: 'https://vite-xyvu.vercel.app' }));

// Route to handle image fetching
app.get('/get-image', (req, res) => {
    res.json({ message: "CORS enabled, request successful!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
