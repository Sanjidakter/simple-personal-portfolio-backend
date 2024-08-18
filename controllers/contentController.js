const Content = require('../models/Content');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create content' });
  }
};

// Get all contents
exports.getContents = async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contents' });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete content' });
  }
};
