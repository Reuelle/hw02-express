
let contacts = [];

// List all contacts
exports.listContacts = (req, res) => {
  res.json(contacts);
};

// Get a contact by ID
exports.getById = (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json(contact);
};

// Add a new contact
exports.addContact = (req, res) => {
  const newContact = { id: contacts.length + 1, ...req.body };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

// Update a contact by ID
exports.updateContact = (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  Object.assign(contact, req.body);
  res.json(contact);
};

// Remove a contact by ID
exports.removeContact = (req, res) => {
  contacts = contacts.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).end();
};
