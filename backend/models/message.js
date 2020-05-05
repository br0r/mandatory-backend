const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messageSchema = new Schema({
    message: {
        type: String,
    },
    messageBy: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Message', messageSchema);
