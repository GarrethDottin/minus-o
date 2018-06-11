const express = require('express');
const userRoutes = require('./user/user.routes');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount auth routes at /auth
router.use('/api/users', userRoutes);

module.exports = router;
