
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());



import apiRouter from './api/api'

// app.use((req, res, next) => {
//   const { method, path } = req;
//   console.log(
//   `New request to: ${method} ${path} at ${new Date().toISOString()}`
//   );
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server up")
});

app.use('/api', apiRouter);


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
