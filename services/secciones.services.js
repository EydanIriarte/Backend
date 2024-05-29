const Seccion = require("../models").secciones;

class SeccionService {
  static async getSecciones(params) {
    return await Seccion.findAll(params);
  }

  static async getSeccion(id) {
    return await Seccion.findOne({ where: { id } });
  }

  static async createSeccion(seccion) {
    return await Seccion.create({
      titulo: seccion.titulo,
      fk_materia: seccion.fk_materia,
    });
  }

  static async updateSeccion(seccion) {
    const instance = await this.getSeccion(seccion.id);

    if (!instance) return null;

    return instance.update({
      titulo: seccion.titulo,
      fk_materia: seccion.fk_materia,
    });
  }

  static async deleteSeccion(id) {
    const instance = await this.getSeccion(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = SeccionService;
