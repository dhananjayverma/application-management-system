const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');
const { validateApplicant } = require('../middleware/validateMiddleware');
const { protect } = require('../middleware/authMiddleware');

router.post('/applicants', protect, validateApplicant, applicantController.createApplicant);
router.get('/applicants', protect, applicantController.getApplicantsByJob);
router.patch('/applicants/:applicantId', protect, applicantController.updateApplicantStatus);
router.delete('/applicants/:applicantId', protect, applicantController.deleteApplicant);

module.exports = router;
