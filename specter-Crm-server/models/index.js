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

/* This is creating a constant that is an array of strings. */
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;