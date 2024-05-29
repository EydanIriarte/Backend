const Materia = require("../models").materia;

class MateriaService {
  static async getMaterias(params) {
    return await Materia.findAll(params);
  }

  static async getMateria(id) {
    return await Materia.findOne({ where: { id } });
  }

  static async createMateria(materia) {
    return await Materia.create({
      nombre: materia.nombre,
      semestre: materia.semestre,
      fk_profesor: materia.fk_profesor,
      fk_carrera: materia.fk_carrera,
    });
  }

  static async updateMateria(materia) {
    const instance = await this.getMateria(materia.id);

    if (!instance) return null;

    return instance.update({
      nombre: materia.nombre,
      semestre: materia.semestre,
      fk_profesor: materia.fk_profesor,
      fk_carrera: materia.fk_carrera,
    });
  }

  static async deleteMateria(id) {
    const instance = await this.getMateria(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = MateriaService;
