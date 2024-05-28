const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middlewares')
const {
  register,
  getUser,
  login,
  deleteUser,
  putUser
} = require('../controllers/user.controllers')

const userRoute = require('express').Router()
userRoute.get('/', isAuthAdmin, getUser)
userRoute.post('/login', login)
userRoute.put('/:id', isAuthAdmin, putUser)
userRoute.post('/register', register)
userRoute.delete('/:id', isAuth, deleteUser)

module.exports = userRoute
