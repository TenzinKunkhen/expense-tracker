import express from "express";
//only for dev mode needs to be removed on prod
import path from "path";
import template from "./../template";
import devBundle from "./devBundle";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(template());
});


const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));


//remove this too
devBundle.compile(app);

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
 if (err) {
  console.log(err) 
 }
 console.info('Server started on port %s.', port)
})