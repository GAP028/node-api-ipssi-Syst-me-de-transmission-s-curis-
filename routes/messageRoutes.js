const express = require('express');
const{
    createMessage,
    findOneById
} = require('../controllers/messageController');
const mesageRouter = express.Router();
mesageRouter.post('/create', createMessage);
mesageRouter.get('/:id', findOneById);
module.exports = mesageRouter;