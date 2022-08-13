<template>
  <div class="to-login">
    <div class="action">
      <el-button class="btn" type="primary" @click="staffLogin">员工登录</el-button>
<!--      <el-button class="btn" type="primary" @click="visitorLogin">游客登录</el-button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'toLogin',
  data () {
    return {
    }
  },
  created () {
  },
  watch: {
  },
  methods: {
    staffLogin () {
      this.$router.push({
        name: 'Login'
      })
    },
    visitorLogin () {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style lang="less">
  .to-login {
    background: url("../../assets/imgs/login_bg2.png") no-repeat;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    padding-top: 100px;
    .action {
      width: 220px;
      margin: 0 auto;
      .btn {
      }
    }
  }
</style>
