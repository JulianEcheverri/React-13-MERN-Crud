const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    logDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Project', projectSchema);