const Estudiante = require("../models").estudiante;

class EstudianteService {
  static async getEstudiantes(params) {
    return await Estudiante.findAll(params);
  }

  static async getEstudiante(id) {
    return await Estudiante.findOne({ where: { id } });
  }

  static async createEstudiante(estudiante) {
    return await Estudiante.create({
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      edad: estudiante.edad,
      carreraId: estudiante.carreraId,
    });
  }

  static async updateEstudiante(estudiante) {
    const instance = await this.getEstudiante(estudiante.id);

    if (!instance) return null;

    return instance.update({
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      edad: estudiante.edad,
      carreraId: estudiante.carreraId,
    });
  }

  static async deleteEstudiante(id) {
    const instance = await this.getEstudiante(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = EstudianteService;
