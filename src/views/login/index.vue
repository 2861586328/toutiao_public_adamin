<template>
<div class=" login-container">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="手机号">
      <el-input v-model="User.mobile"></el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="User.code"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      User: {
        mobile: '', // 手机号
        code: ''// 验证码
      }
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
    onSubmit () {
      console.log('submit!')
      console.log()
    }
  }

}
</script>

<style scoped>

</style>
