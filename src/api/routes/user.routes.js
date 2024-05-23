const { isAuth } = require('../../middlewares/auth.middlewares')
const {
  register,
  getUser,
  login,
  deleteUser
} = require('../controllers/user.controllers')

const userRoute = require('express').Router()
userRoute.get('/', isAuth, getUser)
userRoute.post('/login', login)
userRoute.post('/register', register)
userRoute.delete('/:id', deleteUser)

module.exports = userRoute
