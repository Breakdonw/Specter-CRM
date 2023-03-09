const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs")
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


/* This is the code that is creating the database. */
const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});


function initial() {

  Role.create({
    name: "user",
    roleType: "Role",
    description:"This is the Default User Role and grants Default Permissions "
  });
 
  Role.create({
    name: "moderator",
    roleType: "Role",
    description:"This is the Default Moderator Role and grants permissions to user control and logging  "

  });
 
  Role.create({
    name: "admin",
    roleType: "Role",
    description:"This is the Default User Role and grants Default Permissions "
  });

  db.user.create({
    email: "super@user.com",
    password: bcrypt.hashSync("superUser", 8),
    firstName: "Super",
    lastName: "user (Test Account )",
    state: "Active"
  })
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Specter application." });
});


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);






// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});