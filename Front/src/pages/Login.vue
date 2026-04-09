<template>
  <q-page class="row justify-center">
    <div class="col-5 row formulario flex flex-center">
      <q-card class="col-10 my-card">
        <q-card-section class="flex flex-center q-mb-xl">
            <q-icon name="fas fa-circle-user"  class="text-white" size="128px"/>
        </q-card-section>
        <!-- Sección del input de usuario -->
        <div class="row justify-center">
          <q-input
            color="white"
            v-model="usuario"
            filled
            label-color="white"
            label="Usuario"
            class="col-8"
            style="color: white;" 
             input-class="text-white"
          >
            <template v-slot:prepend>
              <q-icon name="fas fa-user"  class="text-white q-mr-md"/>
            </template>
          </q-input>
        </div>

        <!-- Sección del input de contraseña -->
        <div class="row justify-center">
          <q-input
            color="white"
            v-model="contra"
            filled
            label-color="white"
            label="Contraseña"
            class="col-8 q-mt-md"
          >
            <template v-slot:prepend>
              <q-icon name="fas fa-lock" class="text-white q-mr-md" />
            </template>
          </q-input>
        </div>

        <!-- Sección de "¿Te olvidaste de la contraseña?" -->
        <div>
          <h6 class="text-white flex flex-center">
            ¿Te olvidaste de la contraseña?
            <router-link class="olvidar flex flex-center q-ml-md" to="/olvido">Click aquí</router-link>
          </h6>
        </div>

        <!-- Sección de botones -->
        <div class="flex flex-center q-mt-md">
          <q-btn label="Enviar" class="q-mr-xl botones bg-white" />
          <q-btn label="Registro" class="botones bg-white" @click="enviar_registro"/>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
    import { ref } from "vue"
    import { useRouter } from "vue-router"
    const usuario = ref("")
    const contra = ref("")
    const router = useRouter()
     const enviar_registro = ()=>{
        router.push("/registro")
    }
</script>
<style scoped>
    .my-card{
       box-shadow: none;
       height: 70%;
       background-color: rgb(15, 90, 117);  
       box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
    3px 3px 3px rgb(101, 101, 101),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15); 
    }
    .formulario{
        height: 87vh;
    }
    .titulo_login{
        font-size: 3rem;
    }
    .olvidar{
       
        color: white;
    }
    .botones{
        box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
  3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
  border-left: 1px solid rgba(151, 151, 151, 0.3);
  border-top: 1px solid rgba(151, 151, 151, 0.3);
  font-weight: bold;
    color: rgb(13, 50, 109);
    width: 30%;
    max-width: 114px;
    }
    .botones:hover{
        background-color: white;
        color: rgb(13, 50, 109);
        transition: .4s;
    }

</style>