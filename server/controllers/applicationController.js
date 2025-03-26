const Application = require('../models/Application');
const Job = require('../models/Job');
const sendEmail = require('../utils/sendEmail');

exports.applyJob = async (req, res) => {
  const job = await Job.findById(req.body.jobId);
  if (!job) return res.status(404).json({ message: 'Job not found' });

  const application = await Application.create({
    jobId: job._id,
    employeeId: req.user.id,
    employerId: job.createdBy,
  });

  res.status(201).json(application);
};

exports.updateApplicationStatus = async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (!application) return res.status(404).json({ message: 'Application not found' });

  application.status = req.body.status;
  await application.save();

  await sendEmail('employee@example.com', 'Application Status Updated', `Your application status: ${application.status}`);
  res.json(application);
};
