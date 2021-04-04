import express from "express";
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  let data = {};
  data.responseContent = [
    {
      language: "Spanish",
    },
    {
      language: "French",
    },
    {
      langauge: "German",
    },
  ];
  res.json(data);
});

export default router;
