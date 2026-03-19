const {Schema, default: mongoose} = require('mongoose');
const messageSchema = new Schema({
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