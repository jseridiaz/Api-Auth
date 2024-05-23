const Ropa = require('../models/Ropa.model')

const getRopa = async (req, res, next) => {
  try {
    const allRopa = await Ropa.find()
    return res.status(200).json(allRopa)
  } catch (err) {
    return res.status(400).json(err)
  }
}
const postRopa = async (req, res, next) => {
  try {
    const newRopa = new Ropa(req.body)
    const ropaSaved = await newRopa.save()
    return res.status(201).json(ropaSaved)
  } catch (err) {
    return res.status(400).json(err)
  }
}
const updateRopa = async (req, res, next) => {
  try {
    const { id } = req.params
    const newRopa = new Ropa(req.body)

    newRopa._id = id

    const ropaUpdated = await Ropa.findByIdAndUpdate(id, newRopa, { new: true })
    return res.status(200).json(ropaUpdated)
  } catch (err) {
    return res.status(400).json(err)
  }
}
const deleteRopa = async (req, res, next) => {
  try {
    const { id } = req.params
    const ropaDeleted = await Ropa.findByIdAndDelete(id)
    return res.status(200).json(ropaDeleted)
  } catch (err) {
    return res.status(400).json(err)
  }
}
module.exports = { getRopa, postRopa, updateRopa, deleteRopa }
