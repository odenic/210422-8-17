<template>
  <div class="pagination">
    <button class="pagination-btn number">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuo"></use>
      </svg>
    </button>
    <ul class="pagination-pager">
      <li class="number">1</li>
      <li class=" number">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-more-level1x"></use>
        </svg>
      </li>
      <li class="number">4</li>
      <li class="number active">5</li>
      <li class="number">6</li>
      <li class=" number">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-more-level1x"></use>
        </svg>
      </li>
      <li class="number">10</li>
    </ul>
    <button class="pagination-btn number">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
      </svg>
    </button>
    <select class="pagination-sizes">
      <option value="5">每页 5 条</option>
      <option value="10">每页 10 条</option>
      <option value="15">每页 15 条</option>
      <option value="20">每页 20 条</option>
    </select>
    <span class="pagination-total">共 100 条</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
});
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-pager {
  display: flex;
  align-items: center;
}
.number {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
  &.active {
    background-color: #409eff;
    color: #fff;
  }
}
.pagination-btn {
  border: none;
  outline: none;
}
.pagination-sizes {
  margin: 0 20px;
  outline: none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
