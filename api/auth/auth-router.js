const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");

const bcryptjs = require("bcryptjs");

const Users = require("./auth-model");

const { isValid } = require("../middleware/credentials-test.js");

router.post("/register", (req, res) => {
  const credentials = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(credentials.password, rounds);
  credentials.password = hash;

  Users.add(credentials)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: `tell sam ${err}` });
    });
});

router.post("/login", isValid, (req, res) => {
  const { email, password } = req.body;

  Users.findByEmail(email)
    .then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: "welcome", token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: `tell sam error, ${err}` });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
    role: user.role,
  };
  const options = {
    expiresIn: 1000 * 60,
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
