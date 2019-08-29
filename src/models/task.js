const mongoose = require('mongoose');

const Task = new mongoose.model('Tasks', {
        description: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    });

module.exports = Task;