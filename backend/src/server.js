const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const routes = require("./routes");

const server = express();

const dbConnection = process.env.DB_CONN;

mongoose.connect(dbConnection, {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
