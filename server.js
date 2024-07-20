const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Serve the mock product data with filtering
app.get('/products', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Server Error' });
    }

    let products = JSON.parse(data);

    // Filter by category if the query parameter is provided
    const category = req.query.category;
    if (category) {
      products = products.filter(product => product.category === category);
    }

    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
