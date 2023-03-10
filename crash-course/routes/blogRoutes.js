const express = require('express');
const blogController = require('../controllers/blogController')

// define router 
const router = express.Router();

//blogRoutes to blogController
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_details);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_create_post);
router.delete('/:id', blogController.blog_delete);

// exports router to app.js
module.exports = router;

