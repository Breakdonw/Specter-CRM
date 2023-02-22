module.exports = (sequelize, DataTypes) => {
    const saleItem = sequelize.define("sale_items", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return saleItem;
  };