const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());  // Middleware for parsing JSON bodies
app.use('/api', blogRoutes);  // Prefix API routes with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
