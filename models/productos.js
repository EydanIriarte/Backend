const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  fk_empresa: { type: Schema.Types.ObjectId, ref: 'Empresa', required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  costo: { type: Number, required: true },
  precio_venta: { type: Number, required: true }
});

module.exports = mongoose.model('Producto', productoSchema);
