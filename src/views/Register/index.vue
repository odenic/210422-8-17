<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input
          type="text"
          placeholder="请输入你的手机号"
          v-model="phoneNumber"
        />
        <span class="error-msg" v-show="!phone">请输入正确的手机号</span>
        <span class="error-msg error" v-show="phoneError">手机号已被注册</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input
          type="text"
          placeholder="请输入验证码"
          v-model="verificationCode"
        />
        <span v-show="!isSend" @click="getCode">获取验证码</span>
        <span v-show="isSend">{{ time }}秒后重新获取</span>
        <!-- <img ref="code" src="http://182.92.128.115/api/user/passport/code" alt="code"> -->
        <span class="error-msg" v-show="!code">请输入6位验证码</span>
        <span class="error-msg error" v-show="codeError">验证码错误</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
          type="password"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <span class="error-msg" v-show="!pw">请输入正确的密码</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input
          type="password"
          placeholder="请输入确认密码"
          v-model="confirmPW"
        />
        <span class="error-msg" v-show="!confirm">两次密码不一致</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="isChecked" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg" v-show="!isChecked">请同意用户协议</span>
      </div>
      <div class="btn">
        <button @click="regist">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { RegistData } from "@/types/index";

import { sendCode, regist } from "@/api/user";

export default defineComponent({
  name: "Register",
  data(): RegistData {
    return {
      phoneNumber: "",
      verificationCode: "",
      password: "",
      confirmPW: "",
      isChecked: false,
      isSend: false,
      rescode: null,
      time: 60,
      timer: undefined,
      codeError: false,
      phoneError: false,
    };
  },
  computed: {
    phone(): boolean {
      const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      return reg.test(this.phoneNumber);
    },
    code(): boolean {
      const reg = /^\d{6}$/;
      return reg.test(this.verificationCode);
    },
    pw(): boolean {
      const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{8,20}$/;
      return reg.test(this.password);
    },
    confirm(): boolean {
      return this.password === this.confirmPW;
    },
  },
  methods: {
    async regist(): Promise<void> {
      const { isChecked, phone, code, pw, confirm } = this;
      if (+isChecked + +phone + +code + +pw + +confirm === 5) {
        try {
          await regist(this.phoneNumber, this.password, this.verificationCode);
          this.codeError = false;
          this.phoneError = false;
          this.$router.push({
            name: "Login",
          });
        } catch (error) {
          if (error === "验证码错误") {
            this.codeError = true;
          } else if (error === "手机号已被注册") {
            this.phoneError = true;
          }
        }
      }
    },
    async getCode(): Promise<void> {
      if (this.phone) {
        if (this.phoneNumber) {
          if (this.isSend) return;
          this.isSend = true;
          const res = ((await sendCode(this.phoneNumber)) as unknown) as string;
          this.rescode = res;
          const timer = window.setInterval(() => {
            this.time--;
            if (this.time < 0) {
              this.time = 60;
              this.isSend = false;
              clearInterval(timer);
            }
          }, 1000);
          this.timer = timer;
        }
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
});
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;
      text-align: left;
      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-right: 45px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      span {
        vertical-align: sub;
        position: absolute;
        top: 13px;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
      .error {
        position: absolute;
        top: 100%;
        right: 228px;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
