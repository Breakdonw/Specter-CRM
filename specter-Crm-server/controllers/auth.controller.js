const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signup = (req, res) => {
    // Save User to Database
    var authorities = [];

    User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 8),
      state: "Active",

    })
      .then(user => {
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 43200 // 12 hours
        });
  
          user.setRoles([1]).then(() => {

            user.getRoles().then(roles => {
              for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
              }
              res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: authorities,
                accessToken: token
              });
            });
          




          });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.signin = async (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "Invalid EMAIL" });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid PASS"
          });
        }
  
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 43200 // 12 hours
        });
  
        var authorities = [];
        user.getRoles().then(roles => {
          for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase());
          }
          res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            roles: authorities,
            accessToken: token
          });
        });
      })
      .catch(err => {
        res.status(500).send({ message: err.message + " email Obj : " + JSON.stringify(req.body)});
      });
  };