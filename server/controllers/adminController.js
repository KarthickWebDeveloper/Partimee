const User = require('../models/User');
const Job = require('../models/Job');
const Application = require('../models/Application');
const sendEmail = require('../utils/sendEmail');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// Update user role
exports.updateUserRole = async (req, res) => {
  const { role } = req.body;
  if (!['Employee', 'Employer', 'Admin'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true }).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user role' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('createdBy', 'name email');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

// Delete job by Admin
exports.deleteJobByAdmin = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully by admin' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting job' });
  }
};

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('jobId', 'title')
      .populate('employeeId', 'name email')
      .populate('employerId', 'name email');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch applications' });
  }
};

// Update application status by Admin
exports.updateApplicationStatusByAdmin = async (req, res) => {
  const { status } = req.body;
  if (!['Pending', 'Accepted', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const application = await Application.findById(req.params.id).populate('employeeId', 'email');
    if (!application) return res.status(404).json({ message: 'Application not found' });

    application.status = status;
    await application.save();

    // Send notification to the employee
    await sendEmail(
      application.employeeId.email,
      'Application Status Updated',
      `Your application has been ${status.toLowerCase()}.`
    );

    res.json(application);
  } catch (err) {
    res.status(500).json({ message: 'Error updating application status' });
  }
};
