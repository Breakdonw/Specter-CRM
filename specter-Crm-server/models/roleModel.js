module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Roles", {
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
        type: DataTypes.STRING
      },
      
    });
  
    return Role;
  };