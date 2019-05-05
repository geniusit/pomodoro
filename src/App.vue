<template>
  <div id="app">
    <Learning />
  </div>
</template>

<script>
import Learning from './components/Learning.vue'


export default {
  name: 'app',
  components: {
    Learning
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
