const express = require('express');
const userController = require('../controller/user')
const router = express.Router()



router.post('/' , userController.postUser)
.get("/" , userController.getUsers)
.get('/:id' , userController.getUser)
.put('/:id', userController.putUser)
.patch('/:id', userController.patchUser)
.delete('/:id', userController.deleteUser)



exports.router = router 