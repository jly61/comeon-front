<template>
  <div class="login-vue" :style="bg">
    <div class="container">
      <p class="title">统一认证中心</p>
      <div class="input-c">
        <el-input prefix-icon="el-icon-loading" size="small" v-model="account" placeholder="用户名" clearable @on-blur="verifyAccount"/>
        <p class="error">{{accountError}}</p>
      </div>
      <div class="input-c">
        <el-input type="password" v-model="pwd" size="small" prefix-icon="el-icon-loading" placeholder="密码" clearable @on-blur="verifyPwd"
               @keyup.enter.native="submit"/>
        <p class="error">{{pwdError}}</p>
      </div>
      <el-button size="small" :loading="isShowLoading" class="submit" type="primary" @click="submit">登录</el-button>
<!--      <p class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p>-->
    </div>
  </div>
</template>

<script>
  import { apiAuth, apiGetConfig } from '@/apis/common';

export default {
  name: 'login',
  data () {
    return {
      account: '',
      pwd: '',
      accountError: '',
      pwdError: '',
      isShowLoading: false,
      bg: {}
    }
  },
  created () {
    // this.bg.backgroundImage = 'url(' + require('../../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
    this.bg.backgroundImage = 'url(' + require('../../assets/imgs/login_bg2.png') + ')'
    this.getConfig()
  },
  // watch: {
  //   $route: {
  //     handler (route) {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    verifyAccount () {
      if (this.account !== 'admin') {
        this.accountError = '账号为admin'
      } else {
        this.accountError = ''
      }
    },
    verifyPwd () {
      if (this.pwd !== 'admin') {
        this.pwdError = '密码为admin'
      } else {
        this.pwdError = ''
      }
    },
    submit () {
    },
    getConfig () {
      apiGetConfig().then(res => {
        console.log('res', res)
        if (res.data.status === 0) {
          const { values } = res.data
          console.log(values)
          apiAuth(values).then(res => {
          })
        }
      })
    }
  }
}
</script>

<style>
  .login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .container {
    background: rgba(255, 255, 255, .5);
    width: 300px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
  }

  .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: #fff;
    border-color: #fff;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
  }

  .title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .input-c {
    margin: auto;
    width: 220px;
  }

  .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
  }

  .submit {
    width: 220px;
  }

  .account {
    margin-top: 30px;
  }

  .account span {
    cursor: pointer;
  }

  .ivu-icon {
    color: #eee;
  }

  .ivu-icon-ios-close-circle {
    color: #777;
  }
</style>
