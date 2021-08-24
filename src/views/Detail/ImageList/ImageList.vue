<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <Swiper
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        :slidesPerView="imgUrl.length < 5 ? imgUrl.length : 5"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(item, index) in imgUrl" :key="item.id">
          <img
            :src="item.imgUrl"
            @click="changeZoomImg(item.imgUrl)"
            :class="[
              this.swiperIndex === index + 5 ? 'active' : '',
              this.swiperIndex === index + 5 + imgUrl.length ? 'active' : '',
            ]"
          />
        </SwiperSlide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SkuImageList } from "@/types/index";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Swiper as SwiperClass,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default defineComponent({
  name: "ImageList",
  data() {
    return {
      swiperIndex: NaN,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    imgUrl: {
      type: Array as PropType<Array<SkuImageList>>,
    },
    changeZoomImg: Function,
  },

  methods: {
    onSlideChange(swiper: SwiperClass) {
      this.swiperIndex = swiper.activeIndex;
    },
  },
});
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
