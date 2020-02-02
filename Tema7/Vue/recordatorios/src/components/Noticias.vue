<template lang="html">

  <section class="noticias">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mx-0" >

        <div class=" collapse navbar-collapse " id="navbarTogglerDemo02">
              
          <ul class="navbar-nav mx-auto mt-2 mt-sm-0 ">
              <li class="nav-item active">
                <router-link class="nav-link" to="/PaquiLimpiadas"> PaquiLimpiadas </router-link>
              </li>
              <li class="nav-item active">
                  <router-link class="nav-link " to="/Notas">Notas</router-link>
              </li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="container bg-dark w-100">
       <ul class="d-flex flex-column justify-content-center">
         <li v-for="articulo in info" v-bind:key="articulo" class="text-justify border-top mb-5 pt-5">
           <article v-bind:id="articulo.title">
             <a v-bind:href="articulo.url">
               <img  v-bind:src="articulo.urlToImage" alt="xxx" class="w-50  rounded-top">
              <h4>{{articulo.title}}</h4>
            </a>
            <p>{{articulo.description}}</p>
             
           </article>
           
         </li>
       </ul>
       
    </section>

    




    <FooterNotas ></FooterNotas>
  </section>
</template>

<script lang="js">
  import Vue from 'vue'
  import axios from 'axios';
  import FooterNotas from './FooterNota.vue';
  import AsyncComputed from 'vue-async-computed'
  
  Vue.use(AsyncComputed);
  export default  {
    name: 'noticias',
    props: [],
    data () {
      return {
        url:'https://newsapi.org/v2/everything?' +
          'q=tokyo2020&'+
          'from=today&' +
          'sortBy=popularity&' +
          'apiKey=6879fad749244b41a7fea1a9b7b0a497',
        info: null,
      }
    },
    methods: {
      //biejo codigo
      /*apiCall: async function () {
        var self = this;//Esto es porque this desde dentron dedentro de axio no hace referencia al objeto Vue
        axios
        .get(self.url)
        .then(response => (self.info = response.data.articles ))
        .catch(error => console.log(error));
      },

      startInterval:  function(){
        var self = this;
        setInterval(function() {
          self.apiCall();
        }, 1000);    

      }*/
      pedirNoticias:function () {
        axios
        .get(this.url)
        .then(response => (this.info = response.data.articles ));
      }
    
    },
    mounted () {
        this.pedirNoticias();
    },
    asyncComputed: {
      //forma correcta
      apiCall: async function (){
        var self = this;
        setInterval(function() {
          self.pedirNoticias();
        }, 50000);
    }
    },
    
    components:{
      FooterNotas
    }
}


</script>

<style scoped lang="css">

  .noticias {
    color:white;
  }
  ul{
    list-style:none
  }
</style>
