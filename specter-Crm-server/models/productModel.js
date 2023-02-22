module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
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
      price: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Product;
  };