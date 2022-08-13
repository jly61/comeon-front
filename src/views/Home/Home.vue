<template>
  <div class="page-wrapper">
    <div class="service" @click="showChat">
      <i class="el-icon-service"></i>
      <span class="text">客服</span>
    </div>
    <Chat ref="chatDialog" />
  </div>
</template>

<script>
import Chat from '@/components/chat/Index'
export default {
  name: 'Home',
  components: {
    Chat
  },
  computed: {
  },
  data () {
    return {
    }
  },
  methods: {
    showChat () {
      this.$refs.chatDialog.open()
    }
  }
}
</script>

<style scoped lang="less">
  .page-wrapper {
    height: 100%;
    position: relative;
    .service {
      position: absolute;
      right: 0;
      bottom: 100px;
      color: #fff;
      padding: 4px 8px;
      background: #409eff;
      border-radius: 4px;
      cursor: pointer;
      .text {
        margin-left: 4px;
      }
    }
  }
</style>
