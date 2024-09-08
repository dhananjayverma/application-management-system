const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { validateJob } = require('../middleware/validateMiddleware');
const { protect } = require('../middleware/authMiddleware');

router.post('/jobs', protect, validateJob, jobController.createJob);
router.get('/jobs', protect, jobController.getJobs);

module.exports = router;
