import express from "express"
import { db } from "./bd/bd.js"
import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"

const router = express.Router()
const servidor = express()

// ✅ AGREGAR ESTO: Configurar CORS antes de las rutas
servidor.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

servidor.use(express.json()) // ✅ También importante para recibir JSON

servidor.use(router) // Las rutas después de CORS

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
    io
}