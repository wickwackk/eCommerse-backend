import express from "express";

const user_router = express.Router();

user_router.get("/users", (req, res) => {
  console.log("request to get users info");
  res.status(200).send("users info sent");
});

export default user_router;
