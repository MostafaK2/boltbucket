import express from "express";
import "./config/dotenv.js";
import customItemRouter from "./routes/customItem.js";
import cors from "cors";

// import the router from your routes file

const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Somethings API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

app.use("/customItem", customItemRouter);
