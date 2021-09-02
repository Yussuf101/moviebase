const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const User = connection.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },

    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    indexes: [{ unique: true, fields: ["name"] }],
  }
);

module.exports = User;
