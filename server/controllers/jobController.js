const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const job = await Job.create({ ...req.body, createdBy: req.user.id });
  res.status(201).json(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().populate('createdBy', 'name');
  res.json(jobs);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });
  if (job.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedJob);
};

exports.deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });
  if (job.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

  await job.remove();
  res.json({ message: 'Job deleted' });
};
