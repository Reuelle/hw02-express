// This is where the business logic for handling contacts goes

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

  // This is just an example; replace this with your actual logic
  // for saving the new contact (e.g., to a database)
  console.log('New contact added:', newContact);

  res.status(201).json(newContact);
};
