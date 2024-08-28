// controllers/contacts.js

exports.addContact = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
  }

  const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone,
  };

  console.log('New contact added:', newContact);

  res.status(201).json(newContact);
};

// Example of other controller functions:
exports.listContacts = (req, res) => {
  // Logic to list all contacts
};

exports.getById = (req, res) => {
  const { id } = req.params;
  // Logic to get a contact by ID
};

exports.updateContact = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  // Logic to update a contact
};

exports.removeContact = (req, res) => {
  const { id } = req.params;
  // Logic to remove a contact
};
