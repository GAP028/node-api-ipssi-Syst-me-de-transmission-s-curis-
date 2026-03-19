const {Schema, default: mongoose} = require('mongoose');
const { create } = require('./messageModel');
const userSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        default: 'user',
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        required: true 
    },
});
const User = mongoose.model('User', userSchema);
module.exports = User;