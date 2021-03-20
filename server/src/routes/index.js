const express = require('express');
const postRoutes = require('./post.routes');

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome!!'));
router.use('/posts', postRoutes);

module.exports = router;
