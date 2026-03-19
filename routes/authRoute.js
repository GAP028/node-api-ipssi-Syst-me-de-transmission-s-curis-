const express = require('express');
const { register, login } = require('../controllers/authController');
const authmiddleware = require('../middleware/authMiddleware');
const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

authRouter.get('/me', authmiddleware, (req, res) => {
    res.status(200).json({
        message: 'utilisateur connecté',
        user: req.user,
    });
});
module.exports = authRouter;