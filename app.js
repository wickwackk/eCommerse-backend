import express from "express";

import prod_router from "./routes/product.js";
import users_router from "./routes/user.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(prod_router);
app.use(users_router);

app.listen(4000, () => {
  console.log("listening on 4000");
});
