<template>
    <q-page class="row justify-center">
        <div class="col-10 row justify-center q-mb-xl">
            <q-card class="col-6 row justify-center formulario">
                <q-card-section class="col-12 flex flex-center">
                    <div class="text-h5"> Agregar Curso </div>
                </q-card-section> 
                <q-card-section class="col-10" v-for="(entrada,index) in entradas " :key="index">
                    <q-input v-model="entrada.valor" :label="entrada.nombre" v-if="entrada.tipo === 'text'" />
                    <q-select v-if="entrada.tipo === 'lista'" v-model="entrada.valor" :options="entrada.lista" :option-label="entrada.lista" 
                    option-value="value" :label="entrada.nombre" filled outlined/>
                </q-card-section>
                <q-card-section class="col-10">
                     <q-file v-model="foto" label="Selecciona una foto" accept="image/*" @change="previewPhoto"  filled outlined/>
                </q-card-section>
                <q-card-section class="col-10 flex justify-center">
                    <q-btn class="boton">
                        Guardar
                    </q-btn>                        
                </q-card-section>
            </q-card>
       </div>
    </q-page>
</template>
<script setup>
    import { ref } from "vue";
    const entradas = ref([
        {nombre:"Nombre del curso",valor:"" ,tipo:"text"},
        {nombre:"Duración (Semestres)",valor:"" , tipo:"lista", lista:[1,2,3,4,5,6,7,8,9,10] },
        {nombre:"Tipo de curso: BTP,EMS,etc...",valor:"", tipo:"text"},
        {nombre:"Link Página oficial de UTU",valor:"",tipo:"text"},
        {nombre:"Modalidad",valor:"",tipo:"text", tipo:"lista", lista:["presencial","virtual"] },
        {nombre:"Perfil",valor:"",tipo:"text"},
        
    ])
    const foto =ref("")

</script>

<style scoped>
   
    .boton{
        width: 120px;
        height: 40px;
        box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
        3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15) !important;
    border-left: 1px solid rgba(151, 151, 151, 0.3);
    border-top: 1px solid rgba(151, 151, 151, 0.3);
    }
    .boton:hover{
        transition: .4s;
        background-color: rgb(13, 50, 109);
        color: white;
    }
    .formulario{
        box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
        3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15) !important;
    border-left: 1px solid rgba(151, 151, 151, 0.3);
    border-top: 1px solid rgba(151, 151, 151, 0.3);
    }
    .text-h5{
        color: rgb(13, 50, 109);
        font-size: 2rem;
    }
</style>