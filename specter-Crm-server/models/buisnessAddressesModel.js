module.exports = (sequelize, DataTypes) => {
    const BuisnessAdresses = sequelize.define("BuisnessAdresses", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER

      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ZipCode: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      City: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      State: {
        type: DataTypes.ENUM,
        values: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY","OTHER"],
        allowNull: false,

      },
    });
  
    return BuisnessAdresses;
  };