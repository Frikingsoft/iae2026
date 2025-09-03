import mongoose from "mongoose"

const cursoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    required: true
  },
  duracion: {
    type: Number, 
    required: true
  },
  imagen: {
    type: String
  },
  informacion: {
    type: [String], 
    default: []
  },
  materias: {
    type: [String],
    default: []
  },
  botones: {
    type: [
      {
        nombre: {
          type: String,
         
        },
        icono: {
          type: String,
        
        },
        url: {
          type: String,
         
        }
      }
    ],
   
  }
}, {
  timestamps: true 
});

const Cursos = mongoose.model("Cursos", cursoSchema);

export {
    Cursos
}