const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./helpers/errorHandler');

const app = express();
const PORT = process.env.PORT || 3003;
const MONGO_URL = process.env.DB_HOST;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  });

// Routes and error handler setup
app.use('/api/contacts', require('./routes/api/contacts'));
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});

module.exports = app;
