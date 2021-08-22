<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="magnifying($event)"></div>
    <div class="big">
      <img :src="imgUrl" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Zoom",
  props: {
    imgUrl: String,
  },
  methods: {
    magnifying(e: MouseEvent): void {
      const mask = document.querySelector(".mask") as HTMLElement;
      // const bigImg = document.querySelector(".big>img") as HTMLElement
      const width = Number(window.getComputedStyle(mask).width.split("px")[0]);
      const height = Number(
        window.getComputedStyle(mask).height.split("px")[0]
      );
      // console.log(bigImg);

      let left = e.offsetX - width / 2;
      let top = e.offsetY - height / 2;
      if (left <= 0) {
        left = 0;
      } else if (left >= width) {
        left = width;
      }
      if (top < 0) {
        top = 0;
      } else if (top >= height) {
        top = height;
      }
      mask.style.left = left + "px";
      mask.style.top = top + "px";

      // console.log(window.getComputedStyle(mask).width.split("px")[0]);

      // bigImg.style.left = -(left*8) +"px"
      // bigImg.style.top = -(top*8) +"px"
    },
  },
});
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
