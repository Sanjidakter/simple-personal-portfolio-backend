const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.post('/', contentController.createContent);
router.get('/', contentController.getContents);
router.put('/:id', contentController.updateContent);
router.delete('/:id', contentController.deleteContent);

module.exports = router;
