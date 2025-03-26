const express = require('express');
const { createJob, getJobs, updateJob, deleteJob } = require('../controllers/jobController');
// const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getJobs)
  // .post(protect(['Employer', 'Admin']), createJob);
  .post(createJob);

router.route('/:id')
  // .put(protect(['Employer', 'Admin']), updateJob)
  .put(updateJob)
  // .delete(protect(['Employer', 'Admin']), deleteJob);
  .delete(deleteJob);

module.exports = router;
