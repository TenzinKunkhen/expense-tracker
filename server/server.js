//only for dev mode needs to be removed on prod
import path from "path";
import template from "./../template";
import devBundle from "./devBundle";
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url  = process.env.MONGODB_URI;

MongoClient.connect(url, (err, db) => {
 // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('connected to mongo server')
  db.close()

});
