"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario", // Cambiado de "Estudiante" a "Usuario" para seguir la convención de nombres de modelos en mayúscula inicial
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
      correo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      password: { // Cambiado de "fk_carrera" a "password"
        allowNull: false,
        type: DataTypes.STRING(50), // Cambiado a STRING en lugar de INTEGER
      },
      fk_estudiante: { // Cambiado de "fk_estudiante" a "fk_carrera"
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "usuarios", // Cambiado el nombre de la tabla
    }
  );

  Usuario.getUsuarios = async (params) => { // Cambiado de getEstudiantes a getUsuarios
    const query = `SELECT * FROM usuarios`; // Consulta SQL básica para seleccionar todos los usuarios
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  Usuario.associate = function (models) { // Cambiado a Usuario en lugar de Estudiante
    // Estableciendo la asociación entre Usuario y Carrera
    models.Usuario.belongsTo(models.Carrera, { // Cambiado a models.Carrera
      foreignKey: "fk_carrera",
      as: "carrera", // Cambiado a "carrera" para reflejar la asociación correcta
    });
  };

  return Usuario; // Cambiado de Estudiante a Usuario
};



