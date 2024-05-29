const Conjunto = require('../models/conjunto.model')

const getConjuntos = async (req, res, next) => {
  try {
    const allConjuntos = await Conjunto.find().populate('ropa')
    return res.status(200).json(allConjuntos)
  } catch (err) {
    return res.status(400).json(err)
  }
}
const postConjunto = async (req, res, next) => {
  try {
    const newConjunto = new Conjunto(req.body)
    const conjuntoSaved = await newConjunto.save()
    return res.status(201).json(conjuntoSaved)
  } catch (err) {
    return res.status(400).json(err)
  }
}
const updateConjunto = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldConjunto = await Conjunto.findById(id)
    let newConjunto = new Conjunto(req.body)

    newConjunto._id = id

    newConjunto = await Conjunto.updateOne(
      { _id: id },
      {
        nombre: newConjunto.nombre || oldConjunto.nombre,
        uso: newConjunto.uso || oldConjunto.uso,
        $addToSet: { ropa: { $each: newConjunto.ropa } },
        precio: newConjunto.precio || oldConjunto.precio
      }
    )

    const conjuntoUpdated = await Conjunto.findByIdAndUpdate(id, newConjunto, {
      new: true
    })

    return res.status(200).json(conjuntoUpdated)
  } catch (err) {
    return res.status(400).json(err)
  }
}
const deleteConjunto = async (req, res, next) => {
  try {
    const { id } = req.params
    const conjuntoDeleted = await Conjunto.findByIdAndDelete(id)
    return res.status(200).json(conjuntoDeleted)
  } catch (err) {
    return res.status(400).json(err)
  }
}

module.exports = { getConjuntos, postConjunto, updateConjunto, deleteConjunto }
