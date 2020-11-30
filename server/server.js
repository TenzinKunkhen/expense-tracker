//only for dev mode needs to be removed on prod

import devBundle from "./devBundle";
import { config } from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const mongoUri = config.mongoUri
console.log(mongoUri, 'MONGO URI')
mongoose.connection.on('error', (err) => {
  console.log(err)
})

// app.get("/", (req, res) => {
//   res.status(200).send(template());
// });

//const CURRENT_WORKING_DIR = process.cwd();
// app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.listen(config.port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

devBundle.compile(app);
