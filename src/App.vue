<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Next msg="Welcome to new .... App"/>
    <hr>
    <nav>
        <router-link to="/foo">Перейти к Foo</router-link>
        <router-link to="/bar">Перейти к Bar</router-link>
    </nav>
    
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
    body {
        padding: 0 1rem;
    }
    #app {
        font-family: arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    nav a {
        margin-right: 1rem;
    }
    img {
        height: 50px;
        width: auto;
    }
</style>
