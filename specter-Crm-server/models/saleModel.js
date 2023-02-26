module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define("Sale", {
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
      status: {
        type: DataTypes.ENUM,
        values: ["New","Fufilment","Shipped","Completed"],
        defaultValue: "New"
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    });
  
    return Sale;
  };