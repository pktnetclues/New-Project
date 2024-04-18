import { configDotenv } from "dotenv";
import express from "express";

const app = express();
configDotenv();

app.get("/", (req, res) => {
  res.json({ Hello: "Pankaj Kumar" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
