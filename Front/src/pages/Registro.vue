<template>
  <q-page class="row justify-center">
    <div class="col-5 row formulario q-mb-xl flex flex-center">
      <q-card class="col-10 my-card">
        <q-card-section class="flex flex-center q-mb-xs">
            <q-icon name="fas fa-circle-user"  class="text-white" size="96px"/>
        </q-card-section>
        <!-- Sección del input de usuario -->
        <div class="row justify-center">
          <q-input
            v-for="(entrada, index) in entradas"
            :key="index"
            color="white"
            v-model="entrada.valor"
            filled
            label-color="white"
            :label="entrada.nombre"
            class="col-8"
            style="color: white;" 
            input-class="text-white"
            :type="entrada.tipo"
             lazy-rules
            :rules="entrada.reglas"
            
           
          >
            <template v-slot:prepend>
               <div>
                    <q-icon :name="entrada.icono" class="text-white q-mr-xs"/>
                </div>
            </template>
            <q-icon v-if="entrada.tipo === 'password' && !entrada.ver" 
                     name="fas fa-eye" 
                     class="ver" 
                     size="24px" 
                     @click="cambiar_estado(entrada)">
            </q-icon>
            <q-icon v-if="entrada.tipo === 'text' && entrada.ver" 
                     name="fas fa-eye-slash" 
                     class="ver" 
                     size="24px" 
                     @click="cambiar_estado(entrada)">
            </q-icon>
          </q-input>
        </div>
        <!-- Sección de "¿Te olvidaste de la contraseña?" -->
        <div class="coso">
          <h6 class="text-white flex flex-center">
            ¿Ya tienes cuenta?
            <router-link class="olvidar flex flex-center q-ml-md" to="/login">Login</router-link>
          </h6>
        </div>

        <!-- Sección de botones -->
        <div class="flex flex-center q-mb-xl">
          <q-btn label="Enviar" class="q-mr-md botones" @click="enviar_datos"/>
          <q-btn label="Login" class="botones" @click="enviar_login"/>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { enviar_datos_usuario } from "../composables/funciones.js"
const router = useRouter()

const entradas = ref([
    {nombre:"Usuario", valor:"", icono:"fas fa-user", tipo:"text",reglas: [(val) => (val && val.length > 0) || "Ingrese un nombre de usuario"]},
    {nombre:"Correo", valor:"", icono:"fas fa-envelope", tipo:"email",reglas:[
        (val) => /.+@.+\..+/.test(val) || "Correo inválido"
    ]},
    {nombre:"Contraseña", valor:"", icono:"fas fa-lock", tipo:"password", ver:false,reglas: [
    (val) => val.length >= 8 || "La contraseña debe tener al menos 8 caracteres",
    (val) => /[A-Z]/.test(val) || "Debe incluir al menos una letra mayúscula",
    (val) => /[a-z]/.test(val) || "Debe incluir al menos una letra minúscula",
    (val) => /\d/.test(val) || "Debe incluir al menos un número",
    (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val) || "Debe incluir al menos un carácter especial"
  ]},
    {nombre:"Repetir_Contraseña", valor:"", icono:"fas fa-lock", tipo:"password", ver:false,reglas: [
    (val) => val.length >= 8 || "La contraseña debe tener al menos 8 caracteres",
    (val) => /[A-Z]/.test(val) || "Debe incluir al menos una letra mayúscula",
    (val) => /[a-z]/.test(val) || "Debe incluir al menos una letra minúscula",
    (val) => /\d/.test(val) || "Debe incluir al menos un número",
    (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val) || "Debe incluir al menos un carácter especial"
  ]},
])
const datos_usuario = ref([])
const enviar_login = () => {
    router.push("/login")
}

const cambiar_estado = (entrada) => {
    entrada.ver = !entrada.ver; // Cambia el estado de 'ver'
    entrada.tipo = entrada.ver ? "text" : "password"; // Cambia el tipo de input
}
const enviar_datos = ()=>{
  enviar_datos_usuario(entradas.value,datos_usuario.value)
}
</script>

<style soped>
.my-card {
    box-shadow: none;
    height: 100%;
    background-color: rgb(13, 50, 109);
    box-shadow: 1px 1px 1px rgb(73, 73, 73), 2px 2px 2px rgb(255, 255, 255),
    3px 3px 3px rgb(101, 101, 101), 4px 4px 2px rgb(255, 255, 255), 5px 5px 2px rgb(15, 15, 15); 
}
.formulario {
    height: 87vh;
}
.titulo_login {
    font-size: 3rem;
}
.olvidar {
    color: white;
}
.botones {
    color: white;
    background-color: rgb(13, 50, 109);
    width: 200px;
    border-left: 2px solid rgb(101, 101, 101);
    border-top: 2px solid rgb(101, 101, 101);
    box-shadow: 1px 1px 1px rgb(73, 73, 73), 2px 2px 2px rgb(255, 255, 255),
    3px 3px 3px rgb(101, 101, 101), 4px 4px 2px rgb(255, 255, 255), 5px 5px 2px rgb(15, 15, 15); 
}
.botones:hover {
    background-color: white;
    color: rgb(13, 50, 109);
    transition: .4s;
}
.ver {
    height: 100%;
    width: 64px;
}



/* Cambiar el color del icono de error a verde */
.q-field--error .q-icon {
  color: rgb(204, 94, 94) !important; /* Color del icono de error */
}
.q-field--error .q-field__messages > div {
    color: rgb(204, 94, 94) !important; /* Cambia a verde */
}
.q-field--error .q-field__label {
  color: rgb(204, 94, 94) !important; /* Cambiar el color del label a verde */
}
</style>
