const express = require('express');
const router = express.Router();
const { contactSchema, updateContactSchema } = require('../../schemas/contactSchema');
const validate = require('../../middlewares/validate');
const contactsController = require('../../controllers/contacts');

// Example of a GET route
router.get('/', contactsController.listContacts);
router.get('/:id', contactsController.getById);

// Apply validation before handling the request
router.post('/', validate(contactSchema), contactsController.addContact);
router.put('/:id', validate(updateContactSchema), contactsController.updateContact);

router.delete('/:id', contactsController.removeContact);

module.exports = router;
