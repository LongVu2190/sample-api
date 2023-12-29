import express from "express";
import bodyParser from "body-parser";

import { sampleRoute } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/", sampleRoute);

app.listen(3000, async () => {
  console.log("Server is listening on PORT " + 3000);
});
