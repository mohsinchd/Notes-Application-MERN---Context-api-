const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
require("./Database/connection");
const notesRoutes = require("./Routes/notesRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is Running on the Port ${port}`);
});
