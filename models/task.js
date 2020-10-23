const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    priority: {
        type: Number
    },
    dueDate: {
        type: Date
    }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task