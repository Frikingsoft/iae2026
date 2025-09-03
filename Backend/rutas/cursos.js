import { Cursos } from "../bd/cursos.js"
const datosCurso =  {
    nombre: "Desarrollo Web Full Stack",
    tipo: "Tecnología",
    duracion: 9,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Curso intensivo de desarrollo web",
      "Aprende las tecnologías más demandadas"
    ],
    materias: ["HTML y CSS", "JavaScript", "React", "Node.js"],
    botones:[
      {nombre:"Informacion", icono:"",url:""},
      {nombre:"Duracion", icono:"",url:""}    
    ]
  };
const crear_curso = (req, res) => {
  const curso = new Cursos(req.body || datosCurso)
  curso.save()
    .then(cursoGuardado => {
      res.status(201).json({ mensaje: "✅ Curso creado", curso: cursoGuardado })
    })
    .catch(err => {
      res.status(400).json({ error: err.message })
    })
}

const obtener_cursos = (req, res) => {
  Cursos.find()
    .then(cursos => res.json(cursos))
    .catch(err => res.status(500).json({ error: err.message }))
}


const obtener_curso = (req, res) => {
  Cursos.findById(req.params.id)
    .then(curso => {
      if (!curso) return res.status(404).json({ mensaje: "Curso no encontrado" })
      res.json(curso)
    })
    .catch(err => res.status(500).json({ error: err.message }))
}

const actualizar_curso = (req, res) => {
  Cursos.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(curso => {
      if (!curso) return res.status(404).json({ mensaje: "Curso no encontrado" })
      res.json({ mensaje: "✅ Curso actualizado", curso })
    })
    .catch(err => res.status(400).json({ error: err.message }))
}

const eliminar_curso = (req, res) => {
  Cursos.findByIdAndDelete(req.params.id)
    .then(curso => {
      if (!curso) return res.status(404).json({ mensaje: "Curso no encontrado" })
      res.json({ mensaje: "🗑️ Curso eliminado" })
    })
    .catch(err => res.status(500).json({ error: err.message }))
}

export{
    crear_curso,
    actualizar_curso,
    obtener_curso,
    obtener_cursos,
    eliminar_curso
}