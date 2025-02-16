import express from "express";
import dotenv from "dotenv";
import routes from "./src/route/route.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", routes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
  console.log(`🚀 Express server ready at http://localhost:${port}`);
});
