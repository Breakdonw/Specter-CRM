module.exports = (sequelize, DataTypes) => {
    const Permissions = sequelize.define("Permissions", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER

      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    });
  
    return Permissions;
  };