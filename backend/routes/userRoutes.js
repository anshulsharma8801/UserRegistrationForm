const express = require('express');
const router = express.Router();
const { addUser, getUsers} = require('../controllers/userController')

router.post('/api/add-user',addUser);

router.get('/api', getUsers);

module.exports = router