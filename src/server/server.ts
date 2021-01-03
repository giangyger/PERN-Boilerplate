import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import "./db";
dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());

app.get("/hello", (req: express.Request, res: express.Response) => {
  res.json({ msg: "Hello, this server is working..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
