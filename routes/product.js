import express from "express";
import { getProducts, postProducts } from "../services/prod-service.js";

const prod_router = express.Router();

let products = [{ id: 1, name: "iphone 15" }];

prod_router.get("/products", async (req, res) => {
  console.log("request to get all products");
  const emp = await getProducts(10);
  res.status(200).json(emp);
});

prod_router.post("/product", async (req, res) => {
  const post = await postProducts(req.body.products);
});

export default prod_router;
