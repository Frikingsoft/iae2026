import mongoose from "mongoose"

const noticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  imagen: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  importancia: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
    default: 5
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  },
  fechaExpiracion: {
    type: Date,
    default: function() {
      const fecha = new Date();
      fecha.setDate(fecha.getDate() + 30);
      return fecha;
    }
  },
  activa: {
    type: Boolean,
    default: true
  },
  descripcion: {
    type: String,
    trim: true,
    default: ""
  },
  autor: {
    type: String,
    trim: true,
    default: "Admin"
  }
}, {
  timestamps: true
});

// Índices para mejorar el rendimiento de las consultas
noticiaSchema.index({ importancia: 1, fechaPublicacion: -1 });
noticiaSchema.index({ activa: 1, fechaExpiracion: 1 });

// Método estático para obtener noticias ordenadas por importancia (1 es más importante)
noticiaSchema.statics.obtenerNoticiasOrdenadas = async function() {
  const now = new Date();
  
  // Actualizar noticias expiradas (cambiarlas a inactivas)
  await this.updateMany(
    { fechaExpiracion: { $lt: now }, activa: true },
    { activa: false }
  );
  
  // Obtener solo noticias activas, ordenadas:
  // 1. Por importancia (ascendente: 1,2,3... donde 1 es más importante)
  // 2. Por fecha de publicación (descendente: las más nuevas primero)
  const noticias = await this.find({ activa: true })
    .sort({ importancia: 1, fechaPublicacion: -1 })
    .lean(); // .lean() para mejor rendimiento
  
  return noticias;
};

// Método estático para cambiar importancia
noticiaSchema.statics.cambiarImportancia = async function(id, nuevaImportancia) {
  if (nuevaImportancia < 1 || nuevaImportancia > 10) {
    throw new Error("La importancia debe estar entre 1 y 10");
  }
  
  return await this.findByIdAndUpdate(
    id,
    { importancia: nuevaImportancia },
    { new: true }
  );
};

// Middleware pre-save (sin next para evitar errores)
noticiaSchema.pre('save', function() {
  // Validar que la URL sea válida
  if (this.url && !this.url.startsWith('http')) {
    this.url = 'https://' + this.url;
  }
});

const Noticias = mongoose.model("Noticias", noticiaSchema);

export {
    Noticias
}