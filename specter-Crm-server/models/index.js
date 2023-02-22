/* This is creating a new instance of Sequelize and connecting to the database. */
const {Sequelize }= require("sequelize");

const sequelize = new Sequelize(

  {
    dialect: 'sqlite',
    storage: '../db.sqlite'
  }
);


const db = {};

/* Assigning the Sequelize object to the db object. */
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* This is importing the models into the db object. */
db.user = require("../models/userModel.js")(sequelize, Sequelize);
db.role = require("../models/roleModel.js")(sequelize, Sequelize);
db.permissions = require("../models/permissionsModel.js")(sequelize, Sequelize);
db.buisness = require("../models/buisnessModel.js"),(sequelize,Sequelize);
db.buisnessesAdresses = require("../models/buisnessAddressesModel.js"),(sequelize,Sequelize);
db.product = require("../models/productModel.js"),(sequelize,Sequelize);
db.productInventory = require("../models/productInventoryModel.js"),(sequelize,Sequelize);
db.contact = require("../models/contactModel.js"),(sequelize,Sequelize);




/* This is creating a many-to-many relationship between the role and contact tables. */
db.role.belongsToMany(db.contact, {
  through: "contact_roles",
  foreignKey: "roleId",
  otherKey: "contactId"
});
db.contact.belongsToMany(db.role, {
  through: "contact_roles",
  foreignKey: "contactId",
  otherKey: "roleId"
});
db.contact.hasOne(db.buisness);
db.contact.hasOne(db.user);

/* This is creating a many-to-many relationship between the product and buisnessesAdresses tables. */
db.product.belongsToMany(db.buisnessesAdresses,{through: db.productInventory});
/* This is creating a many-to-many relationship between the buisnesses and buisnessesAdresses tables. */
db.buisnessesAdresses.belongsToMany(db.buisness,{
  through: "buisness_address_associations",
  foreignKey: "buisnessId",
  otherKey: "buisnessAdressId"
});
db.buisness.belongsToMany(db.buisnessesAdresses,{
  through: "buisness_address_associations",
  foreignKey: "buisnessAdressId",
  otherKey: "buisnessId"
});

/* This is creating a many-to-many relationship between the permissions and role tables. */
db.permissions.belongsToMany(db.role,{
  through: "roles_permissions",
  foreignKey: "roleId",
  otherKey: "permissionId"
});
db.role.belongsToMany(db.user, {
    through: "roles_permissions",
    foreignKey: "permissionId",
    otherKey: "roleId"
  });

/* This is creating a many-to-many relationship between the user and role tables. */
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});



module.exports = db;