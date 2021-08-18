<div>
xxx后台登录系统
</div>
<template>
<div class=" login-container">
  <el-form class ="login-form"
           ref="form"
           :model="User"
           :rules="formrules">
    <div class="login-title"></div>
    <el-form-item >
      <el-input
        prop="mobile"
        placeholder= "请输入账号"
        v-model="User.mobile"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input
        prop="code"
        type="password"
        placeholder= "请输入密码"
        v-model="User.code"></el-input>
    </el-form-item>
    <el-form-item >
      <el-checkbox v-model="checked">
        我已阅读相关条款
      </el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button
           class ="login-bt"
           type="primary"
           @click="onlogin">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
// 手动触发表单验证设置ref 2. 通过调用ref获取组件的el调用validate
<script>
export default {
  name: 'LoginIndex',
  components: {},
  data () {
    return {
      formrules: {
        mobile: [
          { required: true, message: '请输入用户账号', trigger: 'change' }
          /* { pattern: /^1|3|5|7|9|\d{9}$/, message: '请输入正确', trigger: 'change' } */ // 第一位为1第二位3459最后9位随便
        ]
      },
      User: {
        mobile: '', // 手机号
        code: ''// 验证码
      },
      checked: true// 是否同意已阅读
    }
  },
  computed: {},
  watch: {},
  created () {
    console.log('初始化成功')
  },
  mounted () {
    console.log('初始化成功')
  },
  methods: {
    onlogin: function () {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
    /*  this.$refs['form'].validate((valid) => {
        console.log(valid)
      }) */
      console.log('submit!')// 获取表单数据提交表单提交成功或者失败
      const mobile = this.User.mobile
      const code = this.User.code
      console.log(mobile)
      console.log(code === '123456')
      if (code === '123456' && mobile === 'Mr.wang') {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        console.log('成功了')
      } else {
        this.$message.error({ message: ' 账号或者密码不对 ' })
        console.log(this.formrules)
      }
    }
  }

}
</script>

<style scoped lang="less">
.login-container {
  position:fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;  //flex水平排列
  flex-direction: column; //垂直排列
  justify-content: center;
  align-items: center;
  background: url("../../assets/login/login.png") no-repeat;
  background-size: cover;  //contain能让图片的长边显示出来cover能让这个图片图片短边显示出来
}
.login-form{
  background-color: #fff;
  padding :50px;
  min-width:300px;
  .login-bt{
   width: 100%;
  }
  .login-title{
    left: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
/*    background: url("../../assets/login/login2.png") no-repeat;*/
    width: 100%;
    height: 0px;
  }
}

</style>
