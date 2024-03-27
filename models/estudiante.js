"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define(
    "Estudiante", // Cambiado de "carrera" a "Estudiante" para seguir la convención de nombres de modelos en mayúscula inicial
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      apellido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      ci: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_carrera: { // Cambiado de "fk_carrera" a "fk_carrera" (asumiendo que es la clave foránea para la carrera)
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "estudiantes", // Corregido el nombre de la tabla
    }
  );

  Estudiante.getEstudiantes = async (params) => { // Cambiado de getmaterias a getEstudiantes
    const query = `SELECT * FROM estudiantes`; // Consulta SQL básica para seleccionar todos los estudiantes
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

 Estudiante.associate = function (models) { // Cambiado a Estudiante en lugar de materia
    // Estableciendo la asociación entre Estudiante y Carrera
    models.Estudiante.belongsTo(models.Carrera, { // Cambiado a models.Carrera
      foreignKey: "fk_carrera",
      as: "carrera", // Cambiado a "carrera" para reflejar la asociación correcta
    });
  };¿

  return Estudiante; // Cambiado de materia a Estudiante
};


