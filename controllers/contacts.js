// Mock database for demonstration purposes
let contacts = [];

// List all contacts
exports.listContacts = (req, res) => {
  res.json(contacts);
};

// Get a contact by ID
exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Looking for contact with ID: ${id}`);
  const contact = contacts.find(c => c.id === id);
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json(contact);
};


exports.addContact = (req, res) => {
  const newContact = { id: contacts.length + 1, ...req.body };
  contacts.push(newContact);
  res.status(201).json(newContact);
};


exports.updateContact = (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  Object.assign(contact, req.body);
  res.json(contact);
};


exports.removeContact = (req, res) => {
  contacts = contacts.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).end();
};
