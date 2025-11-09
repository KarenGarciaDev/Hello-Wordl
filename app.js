// ===============================
// Flexible Hello World for any port
// ===============================
const express = require('express');
const app = express();

// Use environment variable PORT or default to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World from AWS ECS and GitHub Actions! 🚀</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
