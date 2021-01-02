const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
require("./db");

const app = express();
app.use(helmet());
app.use(express.json());

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
