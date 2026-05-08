import express from "express"
import { db } from "./bd/bd.js"
import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"

const router = express.Router()
const servidor = express()

// Middlewares globales
servidor.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

servidor.use(express.json())
servidor.use(express.urlencoded({ extended: true }))

// También aplicar los mismos middlewares al router
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

servidor.use(router)

const httpServer = createServer(servidor)
const io = new Server(httpServer, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
  },
});

const PORT = process.env.PORT || 80
httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

export {
    router,
    servidor,
    io
}