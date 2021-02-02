const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const listingsRouter = require("./listings/listings-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/listings", listingsRouter);

module.exports = server;
