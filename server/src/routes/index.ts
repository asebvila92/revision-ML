import express from "express";
let router = express.Router();

type Data = {
  text: string;
};

/* GET home page. */
router.get("/", (req, res, next) => {
  let data: Data = { text: "hello!" };
  res.json(data);
});

export default router;
