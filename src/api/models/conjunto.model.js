const mongoose = require('mongoose')

const conjuntoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    uso: {
      type: String,
      required: true,
      trim: true,
      enum: ['Deportivo', 'Gala', 'Fiesta', 'Urbano']
    },
    ropa: [{ type: mongoose.Types.ObjectId, ref: 'ropa', required: true }],
    precio: { type: Number, required: true, trim: true }
  },
  { timestamps: true, collection: 'conjuntos' }
)

const Conjunto = mongoose.model('conjuntos', conjuntoSchema, 'conjuntos')

module.exports = Conjunto
