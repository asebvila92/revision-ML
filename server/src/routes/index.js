import express from "express";
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  let languages = [
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
  res.json(languages);
});

export default router;
