"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define(
    "materia",
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
      semestre: {
        allowNull: false,
        type: DataTypes.STRING, // Cambiado a STRING en lugar de TEXT
      },
      fk_profesor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model:"carrera", // Cambiado a "carrera"
          key: "id",
        }
      },
      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model:"carreras", // Corregido a "carreras"
          key: "id",
        }
      },
    },
    {
      timestamps: false,
      tableName: "materias", // Corregido el nombre de la tabla
    }
  );

  materia.getmaterias = async (params) => {
    const query = `SELECT * FROM materias`; // Consulta SQL básica para seleccionar todas las materias
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  materia.associate = function (models) {
    // Cambiado a "carrera" en lugar de "profesor"
    models.carrera.hasMany(materia, {
      foreignKey: "fk_carrera",
      as: "materias", // Cambiado a "materias" para reflejar la asociación correcta
    });
  };

  return materia;
};


