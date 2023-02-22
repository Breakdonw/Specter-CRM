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
      state: {
        type: DataTypes.ENUM,
        values: ['banned','active','inactive', 'locked']
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
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      lastLoginDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
    });
  
    return User;
  };