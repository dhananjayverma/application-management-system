const Interview = require('../models/Interview');

exports.scheduleInterview = async (req, res) => {
  const { applicantId, interviewDate, interviewerName } = req.body;
  try {
    const interview = new Interview({ applicantId, interviewDate, interviewerName });
    await interview.save();
    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getInterviewsByApplicant = async (req, res) => {
  try {
    const { applicantId } = req.query;
    const interviews = await Interview.find({ applicantId });
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
