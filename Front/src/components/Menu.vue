<template>
   
      <q-drawer
        v-model="abrir_menu"
        :mini="mostrar_menu"
        @mouseenter="mostrar_menu = false"
        @mouseleave="mostrar_menu = true"
        :width="200"
        :breakpoint="500"
        bordered
        mini-to-overlay
       
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            
              
            
          <q-item  active clickable v-ripple>
              <q-item-section avatar>
                 <q-icon name="fas fa-circle-user" color="white"/>
              
              </q-item-section>   
               <q-item-section class="text-white">
                    No Registrado
                </q-item-section> 
          </q-item>     
          <q-separator color="white" class="q-mb-md"/>
            <q-item  active clickable v-ripple v-for="(boton, index) in botones" :key="index" @click="entrar_pagina(boton.ruta)">
              <q-item-section avatar>
                <q-icon :name="boton.icono" color="white"/>
              </q-item-section>

              <q-item-section class="text-white">
                {{ boton.nombre }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>
  
</template>
<script setup>
    import { inject, ref } from "vue"
    import { useRouter} from "vue-router"
    const abrir_menu = inject("abrir_menu")
    const mostrar_menu = inject("mostrar_menu")
    const router = useRouter()
    const botones = ref([
        {nombre:"Inicio",icono:"fas fa-building-user",ruta:"/"},
        {nombre:"Noticias",icono:"fas fa-newspaper",ruta:"/noticias"},
        {nombre:"Cursos",icono:"fas fa-graduation-cap", ruta:"/cursos"},
        {nombre:"Iniciar sesión", icono:"fas fa-user", ruta:"/login"},
        {nombre:"Contacto", icono:"fas fa-address-book", ruta:"/contacto"}
    ])
    const entrar_pagina = (e)=>{
      router.push(e)
    }
</script>
<style scoped>
   .fit{
      background-color: rgb(15, 90, 117);    
   }
    

   </style>