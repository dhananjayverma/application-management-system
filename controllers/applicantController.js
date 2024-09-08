const Applicant = require('../models/Applicant');

exports.createApplicant = async (req, res) => {
  const { jobId, name, email, resumeLink, status } = req.body;
  try {
    const applicant = new Applicant({ jobId, name, email, resumeLink, status });
    await applicant.save();
    res.status(201).json(applicant);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getApplicantsByJob = async (req, res) => {
  try {
    const { jobId } = req.query;
    const applicants = await Applicant.find({ jobId });
    res.status(200).json(applicants);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateApplicantStatus = async (req, res) => {
  try {
    const { applicantId } = req.params;
    const { status } = req.body;
    const updatedApplicant = await Applicant.findByIdAndUpdate(applicantId, { status }, { new: true });
    res.status(200).json(updatedApplicant);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteApplicant = async (req, res) => {
  try {
    const { applicantId } = req.params;
    await Applicant.findByIdAndDelete(applicantId);
    res.status(200).json({ message: 'Applicant deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
