const mongoose = require("mongoose");

const URI = process.env.ATLAS_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
