module.exports = (sequelize, DataTypes) => {
    const Buisness = sequelize.define("Buisness", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER

      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
      type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Buisness;
  };