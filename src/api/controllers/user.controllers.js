const { generateToken } = require('../../config/jwt')
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const getUser = async (req, res, next) => {
  const allUsers = await User.find().populate({
    path: 'producto_Favorito',
    populate: {
      path: 'ropa',
      model: 'ropa'
    }
  })
  return res.status(200).json(allUsers)
}
const putUser = async (req, res, next) => {
  const { id } = req.params
  const oldUser = await User.findById(id)
  const newUser = new User(req.body)
  newUser._id = id
  newUser.producto_Favorito = [
    ...oldUser.producto_Favorito,
    ...newUser.producto_Favorito
  ]

  if (req.body.password !== undefined) {
    newUser.password = bcrypt.hashSync(req.body.password, 10)
  }
  const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true })

  return res.status(200).json(updatedUser)
}
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: req.body.rol
    })

    const duplicatedUser = await User.findOne({ userName: req.body.userName })
    if (duplicatedUser) {
      return res.status(400).json('Usuario ya existe')
    }
    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
  } catch (err) {
    return res
      .status(400)
      .json('Error by registering UserName and password. Error type: ' + err)
  }
}
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    if (!user) {
      return res.status(400).json('El Usuario o la Contraseña son incorrectos')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.userName, user.rol)

      return res.status(200).json({ user, token })
    } else {
      return res.status(404).json('El Usuario o la Contraseña son incorrectos')
    }
  } catch (err) {
    return res.status(400).json('Error by loging process. Error Type: ' + err)
  }
}

const deleteUser = async (req, res, next) => {
  const { id } = req.params
  const userDeleted = await User.findByIdAndDelete(id)
  return res.status(200).json(userDeleted)
}
module.exports = { getUser, register, login, putUser, deleteUser }
