"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Carrera = sequelize.define(
    "Carrera", // Cambiado de "carrera" a "Carrera" para seguir la convención de nombres de modelos en mayúscula inicial
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
    },
    {
      timestamps: false,
      tableName: "carreras", // Corregido el nombre de la tabla
    }
  );

  Carrera.getcarreras = async (params) => { // Cambiado de getmaterias a getcarreras
    const query = `SELECT * FROM carreras`; // Consulta SQL básica para seleccionar todas las carreras
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };
  return Carrera; // Cambiado de materia a Carrera
};

