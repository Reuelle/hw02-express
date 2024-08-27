const express = require('express');
const router = express.Router();
const { contactSchema, updateContactSchema } = require('../../schemas/contactSchema');

const contacts = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: '2', name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
];

// GET /api/contacts
router.get('/', (req, res) => {
  res.json(contacts);
});

// GET /api/contacts/:id
router.get('/:id', (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

// POST /api/contacts
router.post('/', (req, res) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { name, email, phone } = req.body;
  const newContact = {
    id: (contacts.length + 1).toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// DELETE /api/contacts/:id
router.delete('/:id', (req, res) => {
  const contactIndex = contacts.findIndex(c => c.id === req.params.id);
  if (contactIndex !== -1) {
    contacts.splice(contactIndex, 1);
    res.json({ message: 'contact deleted' });
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

// PUT /api/contacts/:id
router.put('/:id', (req, res) => {
  const { error } = updateContactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'missing fields' });
  }

  const contact = contacts.find(c => c.id === req.params.id);
  if (contact) {
    const { name, email, phone } = req.body;
    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phone = phone || contact.phone;
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

module.exports = router;
