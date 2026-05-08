<template>
  <q-layout class="pagina">
    <Menu/>
    <q-page-container>
      <div class="logo">
        <img class="logo_iae" src="/logoPolo.png">
        <span class="utu">UTU</span>
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

.utu{
  position: absolute;
  left: 90px;
 
  width: 100px;
  height: 70px;
  font-size: 2.5rem;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
   color: rgb(255, 255, 255);
    text-shadow: 1px 1px 3px rgb(255, 255, 255), 2px 2px 4px rgb(13, 50, 109), 3px 3px 1px rgb(0, 0, 0);
}
  .logo{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(1, 123, 188, 0.95);
    position: fixed;
    top: 0;
    z-index: 1;
     box-shadow: 0 0 1px rgb(3, 103, 252),0 0 2px rgb(3, 62, 150),0 0 3px rgb(255, 255, 255),
        0 0 4px rgb(3, 62, 150),0 0 3px rgb(255, 255, 255), 3px 3px 4px rgb(3, 62, 150);
       
        backdrop-filter:  blur(10px);
        box-shadow: 1px 1px 1px rgb(199, 199, 199), 2px 2px 2px grey
        , 4px 4px 3px rgb(0, 0, 0),-1px -1px 1px rgb(199, 199, 199)
        , -2px -2px 2px grey, -4px -4px 3px rgb(0, 0, 0);
  }
  .logo_utu{
    width: 27%;
    height: 60%;
    margin-left: 64px;
  }
  .logo_iae{
    width: 70px;
    height: 70px;
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
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 3px rgb(255, 255, 255), 2px 2px 4px rgb(13, 50, 109), 3px 3px 1px rgb(0, 0, 0);
    
  }
</style>