const socket = io("http://localhost:3000"); // Ensure it connects to the correct server

const video = document.getElementById("videoPlayer");

video.addEventListener("play", () => {
    socket.emit("play");
});

video.addEventListener("pause", () => {
    socket.emit("pause");
});

video.addEventListener("seeked", () => {
    socket.emit("seek", video.currentTime);
});

socket.on("play", () => {
    video.play();
});

socket.on("pause", () => {
    video.pause();
});

socket.on("seek", (time) => {
    video.currentTime = time;
});
