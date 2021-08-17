<template>
  <TypeNav/>
  <ListContainer/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TypeNav from './TypeNav/index.vue'
import ListContainer from './ListContainer/index.vue'

export default defineComponent({
  name: "Home",
  components:{
    TypeNav,
    ListContainer
  }
  // setup() {

  // },
});
</script>

<style lang="less" scoped></style>
