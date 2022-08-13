<template>
  <div class="page-wrapper">
    <div class="info-wrapper">
      <div class="label">用户id: </div>
      <el-input v-model="userId" style="width: 200px;margin: 0 20px;" />
      <el-button
        @click="onConfirm"
        size="middle"
        type="primary"
      >确定</el-button>
    </div>
    <Chat ref="chatDialog" userId="" />
  </div>
</template>

<script>
import Chat from '@/components/chat/Index'
export default {
  name: 'userLogin',
  components: {
    Chat
  },
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    onConfirm () {
      if (this.userId.trim()) {
        this.$refs.chatDialog.open()
      }
    }
  }
}
</script>

<style scoped lang="less">
  .page-wrapper {
    padding: 100px;
    .info-wrapper {
      display: flex;
      align-items: center;
      .label {
        width: 80px;
        text-align: right;
      }
    }
  }
</style>
