<template>
  <TypeNav />
  <ListContainer />
  <TodayRecommend />
  <Rank />
  <Like />
  <Floor v-for="(item, index) in FloorLists" :key="index" :floors="item" />
  <Brand />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
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
  mounted() {
    this.getFloorLists();
  },
  computed: {
    ...mapState("home", ["FloorLists"]),
  },
  methods: {
    ...mapActions("home", ["getFloorLists"]),
  },

  // setup() {

  // },
});
</script>

<style lang="less" scoped></style>
