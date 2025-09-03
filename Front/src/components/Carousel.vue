<template>
  <div class="q-pa-md col-8">
   
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      :interval="45000" 
      class="carousel"
    >
      <q-carousel-slide 
        v-for="(video, index) in videos" 
        :key="index"
        :name="video.nombre"
        :img-src="video.thumbnail" 
      >
        <video 
          ref="videoElement" 
          autoplay 
          muted 
          controls 
          style="width: 100%; height: 100%;" 
          @ended="nextSlide" 
          @error="handleVideoError"
        >
          <source :src="video.video" type="video/mp4">
          Tu navegador no soporta la reproducción de este video.
        </video>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue"

const slide = ref(1)
const videos = ref([
  { nombre: 1, video: "/IAE/video1.mp4", thumbnail: "/redesysoftware.png" },
  { nombre: 2, video: "/IAE/video2.mp4", thumbnail: "/marketing.png" },
  { nombre: 3, video: "/IAE/video3.mp4", thumbnail: "/construccion.png" },
  { nombre: 4, video: "/IAE/video4.mp4", thumbnail: "/equinos.jpg" },
])

const nextSlide = () => {
  slide.value = slide.value === videos.value.length ? 1 : slide.value + 1
}

const handleVideoError = () => {
  console.error("Error al cargar el video")
}
</script>
<style scoped>
    .imagen_qr{
      position: absolute;
      left:64px;
    }
    .carousel{
        height: 60vh;
         background-color: rgba(134, 166, 216, 0.517);
    }
</style>