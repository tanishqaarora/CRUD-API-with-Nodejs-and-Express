const express = require('express');

// const { getAllUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/users.js');
const  users = require('../controllers/users.js');


const router = express.Router();

// GETTING USERS
router.get('/', users.getAllUsers);

// ADD/CREATE A USER
router.post('/', users.createUser);

// GETTING USER DATA
// To get the user data for a specific ID
// need to find a user in the Db that has the same ID

router.get('/:id', users.getUser);

// DELETE A USER

router.delete('/:id', users.deleteUser);

// UPDATE USER
// Two methods: 
// PUT - used to change everything in the user (every data)
// PATCH - used to partial modify the user

router.patch('/:id', users.updateUser);

module.exports = router;