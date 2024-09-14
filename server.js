require('dotenv').config(); // Ensure to load environment variables

const mongoose = require('mongoose');
const app = require('./app');
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    console.log('Database connected successfully !!!');
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error 🙁', error.message);
    process.exit(1); // Exit the process if the database connection fails
  });
