const {Router} = require('express')
const router = Router()
const passport = require('../middlewares/passport')
const {
  getSignup,
  postSignup,
  getLogin
} = require('../controllers/authControllers')

router.get('/signup', getSignup)
router.post('/signup', postSignup)
router.get('/login', getLogin)
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    passReqToCallback: true,
    failureFlash: true
  })
)

module.exports = router
