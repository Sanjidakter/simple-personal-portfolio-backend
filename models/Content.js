const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['page', 'blog'], required: true },
  content: { type: String, required: true },
  status: { type: String, enum: ['published', 'draft'], default: 'draft' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', contentSchema);
