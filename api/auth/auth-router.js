const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");

const bcryptjs = require("bcryptjs");

const Users = require("./auth-model");

const {
  isValidRegister,
  isUnique,
} = require("./../middleware/credentials-test");

router.post("/register", isValidRegister, isUnique, (req, res) => {
  const credentials = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcryptjs.hashSync(credentials.user_password, rounds);
  credentials.user_password = hash;

  Users.add(credentials)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/users", (req, res) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
