const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const dashBoardRoute = require('./dashBoardRoute')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashBoard', dashBoardRoute);

module.exports = router;
