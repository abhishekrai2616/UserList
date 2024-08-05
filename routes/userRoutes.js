const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
