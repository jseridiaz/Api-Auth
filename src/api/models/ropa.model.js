const mongoose = require('mongoose')

const ropaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    marca: { type: String, required: true, trim: true },
    categoria: {
      type: String,
      required: true,
      enum: ['Camisetas', 'Pantalones', 'Abrigos', 'Zapatillas', 'Accesorios'],
      trim: true
    },
    color: { type: String, trim: true, required: true, default: 'White' },
    uso: {
      type: String,
      required: true,
      enum: ['Deportivo', 'Gala', 'Fiesta', 'Urbano']
    },
    talla: {
      type: String,
      enum: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
      required: true,
      default: 'm'
    },
    estacion: {
      type: String,
      enum: ['Invierno', 'Otoño', 'Primavera', 'Verano'],
      trim: true
    },
    precio: { type: Number, required: true, trim: true }
  },
  { timestamps: true, collection: 'ropa' }
)
const Ropa = mongoose.model('ropa', ropaSchema, 'ropa')

module.exports = Ropa
