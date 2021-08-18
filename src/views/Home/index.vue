<template>
  <TypeNav />
  <ListContainer />
  <TodayRecommend />
  <Rank />
  <Like />
  <Floor />
  <Floor />
  <Brand />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TypeNav from "./TypeNav/index.vue";
import ListContainer from "./ListContainer/index.vue";
import TodayRecommend from "./TodayRecommend/TodayRecommend.vue";
import Rank from "./Rank/Rank.vue";
import Like from "./Like/Like.vue";
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";

export default defineComponent({
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  // setup() {

  // },
});
</script>

<style lang="less" scoped></style>
