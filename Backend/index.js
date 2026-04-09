import { router } from "./config.js"
import { obtener_cursos,crear_cursos_prueba } from "./rutas/cursos.js"
import { todos_cursos } from "./bd/todos_cursos.js"

router.get("/",(req,res)=>{
   obtener_cursos(req,res)    
})
router.post("/crear_todos_cursos",(req,res)=>{
   crear_cursos_prueba(req,res,todos_cursos)
})


