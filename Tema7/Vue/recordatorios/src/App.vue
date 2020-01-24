<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Cabecera></Cabecera>

  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
//import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    Cabecera
    
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
  background-color: rgb(186, 224, 17);
  margin-top: 60px;
}
</style>
