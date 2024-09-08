const { body, validationResult } = require('express-validator');

exports.validateJob = [
  body('title').notEmpty().withMessage('Title is required'),
  body('department').notEmpty().withMessage('Department is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('openDate').isISO8601().withMessage('Invalid date format'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateApplicant = [
  body('jobId').isMongoId().withMessage('Invalid Job ID'),
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('resumeLink').notEmpty().withMessage('Resume Link is required'),
  body('status').isIn(['Pending', 'Interviewed', 'Rejected', 'Hired']).withMessage('Invalid status'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateInterview = [
  body('applicantId').isMongoId().withMessage('Invalid Applicant ID'),
  body('interviewDate').isISO8601().withMessage('Invalid date format'),
  body('interviewerName').notEmpty().withMessage('Interviewer Name is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
