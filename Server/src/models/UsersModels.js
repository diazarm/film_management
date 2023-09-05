const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
  sequelize.define("Users", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true, // Establecer user como clave primaria
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Función para hashear la contraseña antes de guardarla en la base de datos
        const saltRounds = 10; // Número de rondas de salting
        const hashedPassword = bcrypt.hashSync(value, saltRounds);
        this.setDataValue('password', hashedPassword);
      },
    },
  }, { timestamps: false });
};

