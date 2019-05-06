<template>
  <section class="container">
    <div>
      <h1 class="title">nuxt-learn 默认首页</h1>
      <el-button type="primary" v-on:click="handleClick()">跳转至后台页面</el-button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  created() {
    console.log(this.$api.getSolidList)
  },
  methods:{
    handleClick(){
      this.$router.push('/post')
    }
  }
}
</script>

<style>

</style>
