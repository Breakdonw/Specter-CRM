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
      type: {
        type: DataTypes.ENUM,
        values: ['role','buisnessrole']
      },
      description: {
        type: DataTypes.STRING
      },
      
    });
  
    return Role;
  };