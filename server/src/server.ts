import express from "express";
import routes from "./routes";
import notFoundRoute from "./middleware/404";
import errorMiddleware from "./middleware/error";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

app.use(notFoundRoute);
app.use(errorMiddleware);

app.listen(3001, function () {
  // eslint-disable-next-line no-console
  console.log("listening on port 3001!");
});
