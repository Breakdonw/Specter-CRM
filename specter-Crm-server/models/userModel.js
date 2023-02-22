module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING

      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      profileImg: {
        type: DataTypes.STRING
      },
      creationDate: {
        type: DataTypes.DATE
      },
    });
  
    return User;
  };