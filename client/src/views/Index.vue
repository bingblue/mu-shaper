<template>
  <section>
    <mu-header></mu-header>
    <el-container>
      <el-main class="index">
        <h1>{{ user.name }},{{ msg }}</h1>
        <el-table :data="[user]">
          <el-table-column prop="id" label="id"></el-table-column>
          <el-table-column prop="username" label="用户名"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <mu-footer></mu-footer>
  </section>
</template>

<script>
import MuHeader from '../components/Header'
import MuFooter from '../components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    MuHeader,
    MuFooter
  },
  data () {
    return {
      msg: '欢迎来到Vue'
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  text-align: center;
  color: #0099ff;
  margin-bottom: 80px;
}
.index {
  padding-bottom: 400px;
}
button.logout {
  float: right;
}
</style>
