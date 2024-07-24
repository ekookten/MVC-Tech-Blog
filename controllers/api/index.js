const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const blogRoutes = require('./allBlogsRoute');
const commentRoutes = require('./commenRoute');
const userRoutes = require('./userRoute');


// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
 