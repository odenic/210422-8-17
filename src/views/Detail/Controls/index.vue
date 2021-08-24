<template>
  <div class="controls">
    <input autocomplete="off" class="itxt" :value="currentValue"
      @blur="handleBlur"
      @keyup.enter="handleBlur" />
    <a class="plus" @click="currentValue++">+</a>
    <a class="mins" @click="currentValue--">-</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:'Controls',
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
    value: {
      type: Number,
      default: 1,
    },
    changeNum:Function
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    handleBlur(e:Event) {
      this.currentValue = +(e.target as HTMLInputElement).value;
    },
  },
  watch: {
    currentValue(newVal, oldVal) {
      const { min, max } = this;
      let value = +newVal;
      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max;
      }
      value = Math.round(value);
      if (Number.isNaN(value)) {
        value = oldVal;
      }
      this.currentValue = value;
      this.changeNum&&this.changeNum(this.currentValue);
    },
  },
});
</script>

<style lang="less" scoped>
.controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;

  .itxt {
    width: 38px;
    height: 37px;
    border: 1px solid #ddd;
    color: #555;
    float: left;
    border-right: 0;
    text-align: center;
  }

  .plus,
  .mins {
    width: 15px;
    text-align: center;
    height: 17px;
    line-height: 17px;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: -8px;
    border: 1px solid #ccc;
  }

  .mins {
    right: -8px;
    top: 19px;
    border-top: 0;
  }

  .plus {
    right: -8px;
  }
}
</style>
