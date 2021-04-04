import express from "express";
import router from "./routes/index";
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
