const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String },
    link: { type: String },
    description: { type: String },
    tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);