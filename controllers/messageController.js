const { response } = require('express');
const Message = require('../models/messageModel');
const createMessage = async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const type = req.body.type;
    if (!title || !content || !type) {
        return res.status(400).json({ message:'title, content et type sont obligatoires', error: true,
        });       
    }

    try {
        const newMessage = new Message({
            title,
            content,
            type,
        });
        await newMessage.save();
        res.status(201).json({ message: 'Message crée', result: newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: true });
    }
};
    const findOneById = async (req, res) => {
    const id = req.params.id;
    try {
        const message = await Message.findOne({ _id: id });
        if (!message) {
            return res.status(404).json({ message: 'Message non trouvé', error: true });
        }
        res.status(200).json({ message: 'Message trouvé', result: message });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: true });
    }
};
module.exports = {
    createMessage,
    findOneById
};