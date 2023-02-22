module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
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
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  
    return Contact;
  };