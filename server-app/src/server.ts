import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "../config/dbConfig";
import shortUrl from "../routes/shortUrl";

dotenv.config();
connectDb();
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
  cors({
    origin:"http://localhost:3000",
    credentials: true
  })
)
app.use("/api/", shortUrl)

// routes

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});