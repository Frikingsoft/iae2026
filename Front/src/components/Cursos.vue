<template>
  <div class="col-10 row">
    <div v-for="(curso, index) in cursos" :key="index" class="col-xs-12 col-sm-10 col-md-4 col-xl-4 flex flex-center tarjeta">
    <q-card class="my-card flex justify-center">
      <q-img :src="curso.imagen" class="imagen">
        <div class="absolute-top flex flex-center titulo_nombre">
          <div class="text-h6">{{ curso.nombre }}</div>
          
        </div>
        <q-card-actions class="absolute-bottom titulo_nombre">
        <q-btn flat v-for="(boton, index2) in curso.botones" :key="index2" class="botones q-mr-md bg-white"> {{ boton.nombre }} </q-btn>
        
      </q-card-actions>
      </q-img>

      
    </q-card>
  </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const cursos = ref([]);
const traer_cursos = async () => {
  await fetch("http://localhost/")
    .then((respuesta) => respuesta.json())
    .then((datos) => (cursos.value = datos))
    .catch((error) => console.log(error))
}
traer_cursos()
</script>
<style scoped>
    .tarjeta{
        
        height: 450px;
        
    }
    .my-card{
        width: 95%;
        height: 95%;
        box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
          3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
        border-left: 1px solid rgba(151, 151, 151, 0.3);
        border-top: 1px solid rgba(151, 151, 151, 0.3);
    }
    .imagen{
        width: 100%;
        height: 100%;
    }
  .botones{
    box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
  3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
  border-left: 1px solid rgba(151, 151, 151, 0.3);
  border-top: 1px solid rgba(151, 151, 151, 0.3);
  font-weight: bold;
    color: rgb(13, 50, 109);
    
   
  }
.titulo_nombre{
    backdrop-filter: blur(40px);
    text-shadow: 3px 3px 3px rgb(0, 0, 0);
    background-color: rgb(15, 90, 117);
  }
.titulo_nombre{
    backdrop-filter: blur(40px);
    justify-content: center;
    align-items: center;
}
</style>
