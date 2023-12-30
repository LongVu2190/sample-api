import express from "express";
import bodyParser from "body-parser";

import config from "./config/config.js";

import { sampleRoute } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/", sampleRoute);

app.listen(config.server_port, async () => {
  console.log("Server is listening on PORT " + config.server_port);
});
