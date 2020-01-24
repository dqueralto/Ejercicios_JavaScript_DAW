<template lang="html">

  <section class="cabecera">
    <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark " >
                
                <a href="#" class="navbar-brand loguillo" >
                    <img src="../src/assets/img/logo.png" alt="olimpiadas">
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class=" collapse navbar-collapse " id="navbarTogglerDemo02">
                    
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Noticias</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link " href="#"  >Contacto</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link " href="./html/recordatorios.html" >Recordatorio</a>
                        </li>
                    </ul>
                    
                </div>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-primary my-2 my-sm-0 ml-2" type="submit">Login</button>
                    <button class="btn btn-primary my-2 my-sm-0" type="submit">Registro</button>
                </form>
            </nav>
        </header>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: ["class","type"],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .cabecera {

  }
</style>
