<template>
    <div class="row q-ml-md">
        <div v-for="(tarea, index) in tareas" :key="index" class="col-3 q-pa-md">
            <q-card class="my-card" flat bordered @click="enviar(tarea.ruta)">
            <q-icon :name="tarea.icono" size="100px" class="q-mr-md icono"/>      
            <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ tarea.nombre }}</div>
                <div class="text-caption">
                    {{ tarea.descripcion }}
                </div>
            </q-card-section>
            </q-card> 
        </div>
    </div>
</template>
<script setup>
    import { ref } from "vue"
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const tareas = ref([
    {id:1, nombre:"+ Agregar Curso",icono:"fas fa-user-graduate",descripcion:"Permite agregar un nuevo curso",ruta:"/agregar_cursos"},
    {id:2, nombre:"- Eliminar Curso",icono:"fas fa-user-graduate",descripcion:"Permite eliminar un curso",ruta:"/agregar_cursos"},
    {id:3, nombre:"+ Agregar Noticia",icono:"fas fa-book-open",descripcion:"Permite agregar una nueva noticia",ruta:"/agregar_cursos"},
    {id:4, nombre:"- Eliminar Noticia",icono:"fas fa-book-open",descripcion:"Permite eliminar una noticia",ruta:"/agregar_cursos"},
    {id:5, nombre:"+ Agregar Examen",icono:"fas fa-person-chalkboard",descripcion:"Permite agregar una fecha de exámen",ruta:"/agregar_cursos"},
    {id:6, nombre:"- Eliminar Exámen",icono:"fas fa-person-chalkboard",descripcion:"Permite eliminar una fecha de exámen",ruta:"/agregar_cursos"},
  ])
  const enviar = (e)=>{
    router.push(e)
  }  
</script>
<style scoped>
.my-card{
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 300px;
    box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
        3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15) !important;
    border-left: 1px solid rgba(151, 151, 151, 0.3);
    border-top: 1px solid rgba(151, 151, 151, 0.3);
}
.my-card:hover{
    transition: .4s;
    background-color: rgb(13, 50, 109);
  
}
.text-h5,.text-caption{
    font-weight: bold;
    color: rgb(13, 50, 109);
   
}
.my-card:hover .text-h5,
.my-card:hover .text-caption, .my-card:hover .icono{
    color: white;
    transition: .4s;
}
.icono{
    color: rgb(13, 50, 109);
    text-shadow: 1px 1px 3px rgb(255, 255, 255), 2px 2px 4px rgb(13, 50, 109), 3px 3px 1px rgb(0, 0, 0);
}
</style>
