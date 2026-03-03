const express = require("express");
const app = express()

app.use(express.static("public"))

const expressServer = app.listen(4000)

const socketio = require('socket.io')

const io = socketio(expressServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

io.on('connection', (socket) => {
    console.log(socket.id,'has joined our server.')
})