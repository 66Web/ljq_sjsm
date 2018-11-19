<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </this-dialog>
  </div>
</template>

<script type="es6">
  import Dialog from './base/dialog'
  export default {
    components: {
      thisDialog: Dialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: [String, Number]
      }
    },
    data () {
      return {
         isShowSuccessDialog: false,
         isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.post('/api/checkOrder', {orderId: this.orderId})
        .then((res) => {
          console.log(res)
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }, (err) => {
          this.isShowSuccessDialog = true
          // this.isShowFailDialog = true  正确写法
          // 但此处因为用了Json-server,没用express，发送post请求会出错，手动定位成功
          this.$emit('on-close-check-dialog')
        })
    },
    toOrderList () {
      this.$router.push({path: '/orderList'})
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
