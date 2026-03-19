const {schema, default: mongoose} = require('mongoose');
const { type } = require('node:os');
const { title } = require('node:process');

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;