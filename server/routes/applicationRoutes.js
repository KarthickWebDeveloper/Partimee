const express = require('express');
const { applyJob, updateApplicationStatus } = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect(['Employee']), applyJob);
router.put('/:id', protect(['Employer', 'Admin']), updateApplicationStatus);

module.exports = router;
