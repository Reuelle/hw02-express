const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler); // Apply the error-handling middleware

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
