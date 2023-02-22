module.exports = (sequelize, DataTypes) => {
    const ProductInventory = sequelize.define("ProductInventory", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER

      },
      Amount: {
        type: DataTypes.INTEGER,
      },
    });
  
    return ProductInventory;
  };