const express = require('express');
const router = express.Router();
const { contactSchema, updateContactSchema } = require('../../schemas/contactSchema');
const validate = require('../../middlewares/validate');
const contactsController = require('../../controllers/contacts');

// GET /api/contacts
router.get('/', contactsController.getAllContacts);

// GET /api/contacts/:id
router.get('/:id', contactsController.getContactById);

// POST /api/contacts
router.post('/', validate(contactSchema), contactsController.addContact);

// DELETE /api/contacts/:id
router.delete('/:id', contactsController.deleteContact);

// PUT /api/contacts/:id
router.put('/:id', validate(updateContactSchema), contactsController.updateContact);

module.exports = router;
