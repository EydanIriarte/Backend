const Leccion = require("../models").lecciones;

class LeccionService {
  static async getLecciones(params) {
    return await Leccion.findAll(params);
  }

  static async getLeccion(id) {
    return await Leccion.findOne({ where: { id } });
  }

  static async createLeccion(leccion) {
    return await Leccion.create({
      fk_seccion: leccion.fk_seccion,
      titulo: leccion.titulo,
      url: leccion.url,
    });
  }

  static async updateLeccion(leccion) {
    const instance = await this.getLeccion(leccion.id);

    if (!instance) return null;

    return instance.update({
      fk_seccion: leccion.fk_seccion,
      titulo: leccion.titulo,
      url: leccion.url,
    });
  }

  static async deleteLeccion(id) {
    const instance = await this.getLeccion(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = LeccionService;
