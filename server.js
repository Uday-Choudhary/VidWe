const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("play", () => {
        socket.broadcast.emit("play");
    });

    socket.on("pause", () => {
        socket.broadcast.emit("pause");
    });

    socket.on("seek", (time) => {
        socket.broadcast.emit("seek", time);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

app.use(cors());
app.use(express.static(__dirname));

server.listen(3000, () => console.log("Server running on port 3000"));
