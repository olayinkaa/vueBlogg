<template>
  <div id="app">
    <!-- <show-blog/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlog.vue'

export default {
  name: 'app',
  components: {
          'add-blog':AddBlog,
          'show-blog':ShowBlog
  },
  data(){
      return {

      }
  },
  method: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
