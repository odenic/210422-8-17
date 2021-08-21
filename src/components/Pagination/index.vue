<template>
  <div class="pagination">
    <button class="pagination-btn number" @click="changePage(pageNo - 1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuo"></use>
      </svg>
    </button>
    <ul class="pagination-pager">
      <li
        class="number"
        :class="1 === pageNo ? 'active' : ''"
        @click="changePage(1)"
      >
        1
      </li>
      <li class=" number">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-more-level1x"></use>
        </svg>
      </li>

      <li
        class="number"
        v-for="(item, index) in pages.end - pages.start + 1"
        :key="index"
        :class="index + pages.start === pageNo ? 'active' : ''"
        @click="changePage(index + pages.start)"
      >
        {{ index + pages.start }}
      </li>
      <li class=" number">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-more-level1x"></use>
        </svg>
      </li>
      <li
        class="number"
        :class="totalPages === pageNo ? 'active' : ''"
        v-show="totalPages !== 1"
        @click="changePage(totalPages)"
      >
        {{ totalPages }}
      </li>
    </ul>
    <button class="pagination-btn number" @click="changePage(pageNo + 1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
      </svg>
    </button>
    <select
      class="pagination-sizes"
      v-model.number="perPage"
      @click="changePerPage(perPage)"
    >
      <option value="5">每页 5 条</option>
      <option value="10">每页 10 条</option>
      <option value="15">每页 15 条</option>
      <option value="20">每页 20 条</option>
    </select>
    <span class="pagination-total">共 {{ total }} 条</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  data() {
    return {
      perPage: 5,
    };
  },
  props: {
    pageNo: Number,
    pageSize: Number,
    total: Number,
    totalPages: Number,
    changePage: Function,
    changePerPage: Function,
  },
  computed: {
    pages(): { start: number; end: number } {
      if ((this.totalPages as number) <= 1) {
        let end = -1;
        let start = 0;
        return { start, end };
      }
      if ((this.totalPages as number) < 7) {
        let end = (this.totalPages as number) - 1;
        let start = 2;
        return { start, end };
      }
      if ((this.pageNo as number) >= (this.totalPages as number) - 2) {
        let end = (this.totalPages as number) - 1;
        let start = end - 4;
        return { start, end };
      }
      if ((this.pageNo as number) <= 3) {
        let start = 2;
        let end = start + 4;
        return { start, end };
      }
      let start = (this.pageNo as number) - 2;
      let end = start + 4;
      return { start, end };
    },
  },
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
  cursor: pointer;
  transition: 1s;
  &.active {
    background-color: #e1251b;
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
