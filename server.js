import mongoose from "mongoose";
import config from "./config/config";
import app from "./express";

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  throw new Error(`unable to connect to database: `);
});

app.listen(config.port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.info(`Server started on port ${config.port}`);
});
