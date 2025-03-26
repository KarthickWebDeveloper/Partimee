const express = require('express');
const {
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllJobs,
  deleteJobByAdmin,
  getAllApplications,
  updateApplicationStatusByAdmin,
} = require('../controllers/adminController');

const adminOnly = require('../middleware/adminMiddleware');

const router = express.Router();

// Protect routes with adminOnly middleware
router.get('/users', adminOnly, getAllUsers);
router.put('/users/:id', adminOnly, updateUserRole);
router.delete('/users/:id', adminOnly, deleteUser);

router.get('/jobs', adminOnly, getAllJobs);
router.delete('/jobs/:id', adminOnly, deleteJobByAdmin);

router.get('/applications', adminOnly, getAllApplications);
router.put('/applications/:id', adminOnly, updateApplicationStatusByAdmin);

module.exports = router;
