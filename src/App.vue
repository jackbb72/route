<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/foo">Перейти к Foo</router-link>
        <router-link to="/bar">Перейти к Bar</router-link>
    </nav>
    
    <p>Content:</p>
    
    <router-view></router-view>
    
  </div>
</template>

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
