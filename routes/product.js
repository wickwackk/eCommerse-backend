import express from "express";
import { getProducts } from "../services/prod-service.js";

const prod_router = express.Router();

let products = [{ id: 1, name: "iphone 15" }];

prod_router.get("/products", async (req, res) => {
  console.log("request to get all products");
  const emp = await getProducts(5);
  res.status(200).json(emp);
});

prod_router.post("/product", (req, res) => {
  products.push(req.body);

  res.status(200).send(products);
});

export default prod_router;
