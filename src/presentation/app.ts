import express from "express";
import {Router}  from "./router/SuburbRouter";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/suburb",Router)


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});