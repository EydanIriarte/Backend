// controllers/productosController.js
const Producto = require('../models/producto');

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProducto = async (req, res) => {
  const producto = new Producto({
    fk_empresa: req.body.fk_empresa,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    costo: req.body.costo,
    precio_venta: req.body.precio_venta
  });

  try {
    const newProducto = await producto.save();
    res.status(201).json(newProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    if (req.body.fk_empresa != null) {
      producto.fk_empresa = req.body.fk_empresa;
    }
    if (req.body.nombre != null) {
      producto.nombre = req.body.nombre;
    }
    if (req.body.descripcion != null) {
      producto.descripcion = req.body.descripcion;
    }
    if (req.body.costo != null) {
      producto.costo = req.body.costo;
    }
    if (req.body.precio_venta != null) {
      producto.precio_venta = req.body.precio_venta;
    }

    const updatedProducto = await producto.save();
    res.json(updatedProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await producto.remove();
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
