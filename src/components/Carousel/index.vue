<template>
  <Swiper
    :slides-per-view="1"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
    v-if="imgs.length"
  >
    <SwiperSlide v-for="img in imgs" :key="img.id">
      <img :src="img.imgUrl" />
    </SwiperSlide>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default defineComponent({
  name: "ListContainer",
  props: {
    imgs: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>
