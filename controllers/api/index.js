const router = require('express').Router();
const blogRoutes = require('./allBlogsRoute');
const commentRoutes = require('./commentRoute');
const userRoutes = require('./userRoute');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
