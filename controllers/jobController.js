const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, department, description, openDate } = req.body;
  try {
    const job = new Job({ title, department, description, openDate });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
