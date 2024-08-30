import express from "express";
import userRoute from "./routes/user";
import blogRoute from "./routes/blog";
// import { run } from "./database/connection";
import { connection } from "./database/connection";
const app = express();

// middleware
app.use(express.json());

async function connettodb() {
  await connection();
}
app.use("/auth", userRoute);
app.use("/blogs", blogRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});
connettodb();
app.listen(3000, () => {
  console.log("app on port 3000");
});
