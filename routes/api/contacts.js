const express = require('express');
const router = express.Router();
const { contactSchema, updateContactSchema } = require('../../schemas/contactSchema');
const validate = require('../../middlewares/validate');
const contactsController = require('../../controllers/contacts');


router.get('/', contactsController.listContacts);
router.get('/:id', contactsController.getById);


router.post('/', validate(contactSchema), contactsController.addContact);
router.put('/:id', validate(updateContactSchema), contactsController.updateContact);

router.delete('/:id', contactsController.removeContact);

module.exports = router;
