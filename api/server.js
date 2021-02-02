const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const listingsRouter = require("./listings/listings-router");
const authRouter = require("./auth/auth-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/listings", listingsRouter);
server.use("/api/auth", authRouter);
module.exports = server;
