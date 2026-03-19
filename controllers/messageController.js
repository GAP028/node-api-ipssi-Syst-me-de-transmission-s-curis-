const { res } = require('express');
const Message = require('../models/messageModel');
const createMessage = async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const type = req.body.type;
    if (!title || !content) {
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
const findAll = async (req, res) => {
    try {
        const messages = await Message.find({type: 'public'});
        res.status(200).json({ message: 'Messages trouvés', result: messages });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: true });
    }
};
const findOneById = async (req, res) => {
  const id = req.params.id;

  try {
    const message = await Message.findOne({ _id: id });

    if (!message) {
      return res.status(404).json({
        message: 'Message non trouvé',
        error: true,
      });
    }

    if (message.type === 'lecture_unique') {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({
          message: 'Connexion obligatoire pour lire ce message',
          error: true,
        });
      }

      const token = authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({
          message: 'Token invalide',
          error: true,
        });
      }

      const jwt = require('jsonwebtoken');

      try {
        jwt.verify(token, process.env.JWT_SECRET);
      } catch (error) {
        return res.status(401).json({
          message: 'Token invalide ou expiré',
          error: true,
        });
      }

      await Message.deleteOne({ _id: id });
    }

    res.status(200).json({
      message: 'Message trouvé',
      result: message,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur serveur',
      error: true,
    });
  }
};

module.exports = {
    createMessage,
    findAll,
    findOneById,
};