<template>
  <q-layout class="pagina">
    <Menu/>
    <q-page-container>
      <div class="logo">
        <img class="logo_iae" src="/logoPolo.png">
        <h3 class="texto"> {{ titulo }}</h3>
        <img class="logo_utu" src="/logoutu.png">
      </div>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import { provide, ref } from 'vue'
  import Menu from "../components/Menu.vue"
  const titulo = ref("Polo Educativo Tecnológico Melo")
  const abrir_menu = ref(true)
  const mostrar_menu = ref(true)
  provide("abrir_menu",abrir_menu)
  provide("mostrar_menu",mostrar_menu)

  



</script>
<style scoped>

  .pagina{
    background-color: rgba(134, 166, 216, 0.517);
   
   
  }
  .logo{
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  }
  .logo_utu{
    width: 27%;
    height: 60%;
    margin-left: 64px;
  }
  .logo_iae{
    width: 10%;
    height: 100%;
    margin-left: 20px;
    padding-top: 10px ;
    padding-bottom: 10px;   
  }
  .texto{
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    color: rgb(13, 50, 109);
    text-shadow: 1px 1px 3px rgb(255, 255, 255), 2px 2px 4px rgb(13, 50, 109), 3px 3px 1px rgb(0, 0, 0);
    
  }
</style>