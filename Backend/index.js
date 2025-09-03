import { router } from "./config.js"
import { obtener_cursos } from "./rutas/cursos.js"
router.get("/",(req,res)=>{
   obtener_cursos(req,res)
    
})