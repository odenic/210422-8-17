<template>
  <div class="mask" @mousewheel.prevent @click.self="changeShow">
    <div class="main">
      <div class="code">
        <img :src="codeUrl" alt="" />
      </div>
      <button @click="checkState">支付完成</button>
      <div class="errorInfo" v-show="isShow">支付失败，请重试</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { checkPaymentState } from "@/api/pay";

export default defineComponent({
  name: "QRCode",
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    codeUrl: String,
    changeShow: Function,
    orderId: String,
  },
  methods: {
    async checkState() {
      try {
        await checkPaymentState(this.orderId as string);
        this.$router.push("/paySuccess");
      } catch {
        this.isShow = true;
      }
    },
  },
});
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.616);
  top: 0px;
  left: 0px;
  .main {
    width: 500px;
    height: 500px;
    margin: 150px auto;
    background-color: white;
    padding: 80px;
    box-sizing: border-box;
    .code {
      width: 200px;
      height: 200px;
      margin: 0 auto;
    }
    button {
      width: 60px;
      height: 30px;
      margin-top: 70px;
    }
    .errorInfo {
      color: red;
      font-size: 16px;
    }
  }
}
</style>
