const express = require('express');
const router = express.Router();
const { contactSchema, updateContactSchema } = require('../../schemas/contactSchema');
const validate = require('../../middlewares/validate');
const contactsController = require('../../controllers/contacts');

// Example of a GET route
router.get('/', contactsController.listContacts);
router.get('/:id', contactsController.getById);
router.post('/', contactsController.addContact);
router.delete('/:id', contactsController.removeContact);
router.put('/:id', contactsController.updateContact);

module.exports = router;
