<template>
  <el-dialog
    title="客服88"
    :visible.sync="visible"
    width="640px"
  >
    <div class="chat-box" ref="chatBox">
      <div v-for="(item, index) in chatList" :key="index" class="chat-item-box">
        <div class="date">{{ item.date }}</div>
        <div v-if="item.mine === false" class="chat-item">
          <div class="avatar">
            <img src="../../assets/imgs/cat.png" alt="">
          </div>
          <div class="text">
            {{ item.text }}
          </div>
        </div>
        <div v-else class="chat-item chat-item-mime">
          <div class="text">
            {{ item.text }}
          </div>
          <div class="avatar">
            <img src="../../assets/imgs/mouse.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <span class="footer">
      <el-button size="middle" @click="onClose">关 闭</el-button>
      <el-button size="middle" type="primary" @click="onSend">发 送</el-button>
    </span>
  </el-dialog>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Index',
  props: {
    userId: String
  },
  computed: {
    id () {
      console.log('this.userId', this.userId)
      return this.userId
    }
  },
  data () {
    return {
      visible: false,
      chatList: [
        {
          date: '2020/04/25 21:19:07',
          text: '只羡鸳鸯不羡仙',
          mine: true
        },
        {
          date: '2020/04/25 21:20:07',
          text: '要留清白在人间',
          mine: true
        },
        {
          date: '2020/04/25 21:21:07',
          text: '金凤玉露喜相逢',
          mine: false
        },
        {
          date: '2020/04/25 21:22:07',
          text: '一遇金鳞便化龙',
          mine: false
        }
      ],
      randomList: [
        '山有木兮木有枝，心悦君兮君不知',
        '人生若只如初见，何事秋风悲画扇',
        '曾经沧海难为水，除却巫山不是云',
        '桃之夭夭，灼灼其华'
      ]
    }
  },
  methods: {
    open () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    onSend () {
      this.chatList.push({
        date: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
        text: this.randomList[Math.floor(Math.random() * 4)],
        mine: true
      })

      this.$nextTick(() => {
        const chatBox = this.$refs.chatBox
        const { height } = chatBox.getBoundingClientRect()
        chatBox.scrollTo({
          top: height + chatBox.scrollTop
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
  .chat-box {
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    background: #f5f5f5;
    padding: 20px;
    box-sizing: border-box;
    .chat-item-box {
      .date {
        text-align: center;
        line-height: 40px;
      }
      .chat-item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .avatar {
          img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .text {
          position: relative;
          max-width: 300px;
          padding: 4px 8px;
          background: #fff;
          border-radius: 6px;
          &::before {
            content: "";
            position: absolute;
            border-top: 6px solid transparent;
            border-right: 6px solid #fff;
            border-bottom: 6px solid transparent;
            border-left: 6px solid transparent;
            left: -12px;
            top: 7px;
          }
        }
      }
      .chat-item-mime {
        justify-content: flex-end;
        .avatar {
          img {
            margin-left: 10px;
          }
        }
        .text {
          color: #fff;
          background: #409eff;
          &::after {
            content: "";
            position: absolute;
            border-top: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 6px solid #409eff;
            right: -12px;
            top: 7px;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
    background: #f5f5f5;
    border-top: 1px solid #ddd;
  }
</style>
<style lang="less">
  .page-wrapper {
    .el-dialog__body {
      padding: 0;
    }
  }
  /deep/ .el-dialog__body {

  }
</style>
