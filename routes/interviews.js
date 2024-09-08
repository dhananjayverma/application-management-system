const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');
const { validateInterview } = require('../middleware/validateMiddleware');
const { protect } = require('../middleware/authMiddleware');

router.get('/interviews', protect, interviewController.getInterviewsByApplicant);
router.post('/interviews', protect, validateInterview, interviewController.scheduleInterview);

module.exports = router;
