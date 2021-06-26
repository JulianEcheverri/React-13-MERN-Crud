const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    logDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', taskSchema);