import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
// app.use(express.json()); // dùng để tự động parse incomming req bodies với Json payloads , cho kết quả là 1 objects -> gửi cho req.body
app.use(cors()); //

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});
app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome to the Express server!");
});
app.listen(7000, () => {
  console.log("Server listening on port 7000");
});

