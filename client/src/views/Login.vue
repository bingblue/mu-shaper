<template>
  <section>
    <mu-header></mu-header>
    <el-container>
      <el-main class="login">
        <h1>用户登录</h1>
        <el-form :model="loginInfo" label-position="top" class="login-form">
          <el-form-item prop="username">
            <el-input v-model="loginInfo.username" auto-complete="new-password" placeholder="请输入用户名">
              <iconfont slot="prefix" icon="search"></iconfont>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginInfo.password" type="password" auto-complete="new-password" placeholder="请输入密码">
              <iconfont slot="prefix" icon="menu-pro"></iconfont>
            </el-input>
          </el-form-item>
          <el-form-item class="btn-submit">
            <el-button type="primary" @click="postLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <mu-footer></mu-footer>
  </section>
</template>

<script>
import MuHeader from '../components/Header'
import MuFooter from '../components/Footer'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  components: {
    MuHeader,
    MuFooter
  },
  data () {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'nickName'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    // 登陆
    postLogin () {
      let postData = {
        username: this.loginInfo.username,
        password: this.loginInfo.password
      }
      this.login(postData).then(() => {
        this.$router.push({
          name: 'index',
          params: {
            name: this.name
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.login {
  h1 {
    font-size: 24px;
    text-align: center;
    color: #0099ff;
    margin-bottom: 80px;
  }
  .login-form {
    margin: 0 auto;
    width: 100%;
    min-width: 320px;
    max-width: 320px;
    margin-bottom: 200px;
    .fa-icon {
      padding-left: 5px;
    }
  }
  .btn-submit {
    text-align: center;
    button {
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>
