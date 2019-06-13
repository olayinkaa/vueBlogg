<template>
  <div id="app">
    <add-blog/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'

export default {
  name: 'app',
  components: {
          'add-blog':AddBlog
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
