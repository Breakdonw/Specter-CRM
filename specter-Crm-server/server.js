const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
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
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Specter application." });
});









// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});