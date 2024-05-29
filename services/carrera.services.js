const Carrera = require("../models").carrera;

class CarreraService {
  static async getCarreras(params) {
    return await Carrera.findAll(params);
  }

  static async getCarrera(id) {
    return await Carrera.findOne({ where: { id } });
  }

  static async createCarrera(carrera) {
    return await Carrera.create({
      nombre: carrera.nombre,
      descripcion: carrera.descripcion,
      duracion: carrera.duracion,
    });
  }

  static async updateCarrera(carrera) {
    const instance = await this.getCarrera(carrera.id);

    if (!instance) return null;

    return instance.update({
      nombre: carrera.nombre,
      descripcion: carrera.descripcion,
      duracion: carrera.duracion,
    });
  }

  static async deleteCarrera(id) {
    const instance = await this.getCarrera(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = CarreraService;
