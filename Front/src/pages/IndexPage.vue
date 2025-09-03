<template>
  <q-page class="row justify-center q-mt-md">
    <Carousel/>
    <h2 class="col-12 flex flex-center texto"> Cursos   <q-icon name="fas fa-graduation-cap" color="#0D326D" class="q-ml-xl"/>
    
     </h2>
    
    <Cursos/>
   
  </q-page>
</template>

<script setup>
import Cursos from "../components/Cursos.vue"
import Carousel from "../components/Carousel.vue"

</script>
<style scoped>
  .texto{
     font-size: 4rem;
    font-weight: bold;
    color: rgb(13, 50, 109);
    letter-spacing: 5px;
    text-shadow: 1px 1px 3px rgb(255, 255, 255), 2px 2px 4px rgb(13, 50, 109), 3px 3px 1px rgb(0, 0, 0);
  }
</style>