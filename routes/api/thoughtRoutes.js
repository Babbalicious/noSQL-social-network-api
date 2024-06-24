const router = require('express').Router();

const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thought/:thoughtId/reactions POST new reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

// /api/thought/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;
