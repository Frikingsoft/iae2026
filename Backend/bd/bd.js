import mongoose from 'mongoose'
const db = mongoose.connect("mongodb://localhost:27017/iae")
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error de conexión:', err))

export{
    db
}