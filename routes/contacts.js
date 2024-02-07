const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');




// Week 2 - GET Route to retrieve contacts from database.
router.get('/', contactsController.getAll);
// Week 2
router.get('/:id', contactsController.getSingle);

// Middleware to check if input fields are filled in or not.
// const middleware = require('../middleware/contacts'); 

// Week 3 - POST Route to create a contact. Also created middleware to check if the inputs are empty or not.
router.post('/', contactsController.createContact);

// Week 3 - PUT - Update Contact, Also used middleware to check if inputs are empty or not.
router.put('/:id', contactsController.updateContact)

// Week 3 - DELETE - Delete Contact
router.delete('/:id', contactsController.deleteContact)



module.exports = router;