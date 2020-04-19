const { Router } = require('express');
const {
  getMe,
  login,
  logout,
  register,
  resetPassword,
  updateDetails,
  forgotPassword,
  updatePassword,
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = Router();

router.post('/forgotpassword', forgotPassword);
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', logout);
router.put('/updatedetails', protect, updateDetails);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatepassword', protect, updatePassword);

module.exports = router;