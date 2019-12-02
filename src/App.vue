<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Next msg="Welcome to new .... App"/>
    <hr>
    <router-link
        to="/foo"
        msg="Fooo">Перейти к Foo</router-link>
    <router-link to="/bar">Перейти к Bar</router-link>
    
    <p>Routs: </p>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import Next from './components/Next.vue'

export default {
  name: 'app',
  components: {
    Next
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
