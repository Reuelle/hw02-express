const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const contactsRouter = require('./routes/api/contacts');

const app = express();

app.use(cors());
app.use(express.json()); // This middleware parses JSON bodies
app.use(morgan('tiny'));

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
