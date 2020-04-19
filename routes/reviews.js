const { Router } = require('express');
const router = Router({ mergeParams: true });
const {
  addReview,
  getReview,
  getReviews,
  updateReview,
  deleteReview,
} = require('../controllers/reviews');

const Review = require('../models/Review');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
    .get(advancedResults(Review, {
      path: 'bootcamp',
      select: 'name'
    }), getReviews)
    .post(protect, authorize('user', 'admin'), addReview)

router
  .route('/:id')
    .get(getReview)
    .put(protect, authorize('user', 'admin'), updateReview)
    .delete(protect, authorize('user', 'admin'), deleteReview)
module.exports = router;