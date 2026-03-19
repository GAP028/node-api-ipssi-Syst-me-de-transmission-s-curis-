const express = require('express');
const{
    createMessage,
    findAll,
    findOneById,
} = require('../controllers/messageController');
const mesageRouter = express.Router();
mesageRouter.post('/', createMessage);
mesageRouter.get('/', findAll);
mesageRouter.get('/:id', findOneById);
module.exports = mesageRouter;