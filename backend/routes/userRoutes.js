const express = require('express');
const router = express.Router();
const { addUser, getUsers} = require('../controllers/userController')

router.post('/add-user',addUser);

router.get('/', getUsers);

module.exports = router