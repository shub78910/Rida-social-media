import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";
// const SocketServer = require("./socketServer");
// const { ExpressPeerServer } = require("peer");
import path from "path";

import authRoute from "./routes/authRouter.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Socket
http.createServer(app);
// const io = require("socket.io")(http);

// io.on("connection", (socket) => {
//   SocketServer(socket);
// });

// Create peer server
// ExpressPeerServer(http, { path: "/" });

// Routes
app.use("/api", authRoute);
// app.use("/api", require("./routes/userRouter"));
// app.use("/api", require("./routes/postRouter"));
// app.use("/api", require("./routes/commentRouter"));
// app.use("/api", require("./routes/notifyRouter"));
// app.use("/api", require("./routes/messageRouter"));

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
