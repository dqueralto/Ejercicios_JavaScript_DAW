<template lang="html">

<section class="paqui-limpiadas">
  <div class="container-fluid  mx-0 px-0">
        <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark " >
                
                <a href="#" class="navbar-brand loguillo" >
                    <img src="../assets/img/logo.png" alt="olimpiadas">
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
                            <router-link class="nav-link " to="/Noticias">Noticias</router-link>

                        </li>
                        <li class="nav-item active">
                            <router-link class="nav-link " to="/Notas">Recordatorios</router-link>

                        </li>
                    </ul>
                    
                </div>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-primary my-2 my-sm-0 ml-2" data-toggle="modal" data-target="#login" type="submit">Login</button>
                    <button class="btn btn-primary ml-2 my-sm-0" data-toggle="modal" data-target="#registro" type="submit">Register</button>
                </form>
            </nav>

            <div class="modal fade" id="login" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" ><!--Modal container-->
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header navmodhead">
                    <h5 class="modal-title " id="staticBackdropLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      <form>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Email address:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email@email.com" aria-describedby="emailHelp">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Password:</label>
                            <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1">
                          </div>
                          <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                          </div>
                        </form>
                  </div>

                </div>
              </div>
            </div>

            <div class="modal fade" id="registro" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" ><!--Modal container-->
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header navmodhead">
                    <h5 class="modal-title " id="staticBackdropLabel">Register</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      <form>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Name:</label>
                            <input type="Text" class="form-control" id="exampleInputEmail1" placeholder="Name" aria-describedby="emailHelp">
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail1">Surname:</label>
                            <input type="Text" class="form-control" id="exampleInputEmail1" placeholder="Surname" aria-describedby="emailHelp">
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail1">Email address:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email@email.com" aria-describedby="emailHelp">
                          </div>

                          <div class="form-group">
                            <label for="exampleInputPassword1">Password:</label>
                            <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1">
                          </div>

                          <div class="form-group">
                            <label for="exampleInputPassword1">Password Repit:</label>
                            <input type="password" class="form-control" placeholder="Password Repit" id="exampleInputPassword1">
                          </div>

                          <div class="form-group">
                            <label for="Sex">Sex:</label>

                            <div class="input-group-prepend ">
                                <div class="input-group-text mx-3">
                                  <input type="radio" name="gender" aria-label="Male">Male
                                </div>
                                <div class="input-group-text mx-3">
                                <input type="radio" name="gender"  aria-label="Female">Female
                                </div>
                                <div class="input-group-text mx-3">
                                <input type="radio" name="gender"  aria-label="Female">Other
                                </div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary mt-5">Submit</button>
                          </div>
                        </form>
                  </div>

                </div>
              </div>
              </div>

        </header>

        <section class="cuerpo row">

          <div class="hero-image row">
            <div class="hero-text col-sm-12">
              <h1>死にたい</h1>
              <p>Descubre el mañana</p>
            </div>
          </div> 
            <section class="col-md-8 articulos text-justify">
                <article class="row ">
                    <p class="col-6">
                        Los Juegos Olímpicos de Atenas 1896, conocidos oficialmente como Juegos de la I Olimpiada, se celebraron en Atenas, Grecia, entre el 6 y el 15 de abril de 1896. 
                        Participaron 241 atletas masculinos no hubo participación femenina de 14 países, que disputaron en 43 competiciones de 9 deportes. 
                        Fueron los primeros Juegos Olímpicos de la Edad Contemporánea.
                        A pesar de los muchos obstáculos y reveses, los Juegos Olímpicos de 1896 fueron reconocidos como un gran éxito. 
                        Tuvieron la mayor participación internacional en un evento deportivo hasta esa fecha. 
                        El Estadio Panathinaikó, que fue el primer gran estadio del mundo moderno, vio rebasada su capacidad con la multitud de personas más grande que se había reunido jamás para ver un evento deportivo.
                        Lo más sobresaliente para los griegos fue la victoria de su compatriota Spiridon Louis en la maratón. 
                        El competidor más exitoso fue el luchador y gimnasta alemán Carl Schuhmann, que ganó cuatro medallas de oro.
                        Desde entonces, cada cuatro años, deportistas de todos los países se reúnen para competir entre ellos. 
                        Solo las grandes guerras del siglo XX han impedido la realización de los Juegos Olímpicos, pero al culminar estas, se ha continuado con la tradición. 
                        Atenas organizó nuevamente los Juegos Olímpicos en 2004.
                    </p>
                    <img class="col-6" src="../assets/img/atenas1896.jpeg" alt="atenas1896">
                </article>
                <article class="row ">
                    <img class="col-6" src="../assets/img/paris1900.jpeg" alt="paris1900">
                    <p class="col-6">
                        Los Juegos Olímpicos de París 1900, oficialmente Juegos de la II Olimpiada, son la segunda edición de las olimpiadas modernas. 
                        Tuvieron lugar en París, Francia, del 14 de mayo al 28 de octubre de 1900, en el marco de la Exposición Universal. 
                        La decisión de celebrar los Juegos de 1900 en París se tomó en la reunión del I Congreso Olímpico celebrado en 1894.

                        Tras los Juegos de 1896 Pierre de Coubertin, presidente del Comité Olímpico Internacional (COI), quería organizar los Juegos de la II Olimpiada, pero Alfred Picard, comisario general de la Exposición Universal quería organizar «competiciones internacionales de ejercicio físico y deportes» durante el evento. El por entonces órgano rector del deporte en Francia, la Union des sociétés françaises de sports athlétiques (USFSA), en noviembre de 1898 decidió finalmente celebrar las competiciones de la Exposición en lugar de los Juegos de Coubertin que, en la primavera de 1899 se vio obligado a aceptar la propuesta de la USFSA: «Las competiciones de la Exposición se celebran en lugar de los Juegos Olímpicos de 1900 y cuentan como equivalentes a la II Olimpiada.» 
                        No hubo ceremonia de apertura ni de clausura, las pruebas se desarrollaron a lo largo de cinco meses y estos eventos no se denominan «Juegos Olímpicos» en los documentos oficiales ni en los carteles promocionales, por lo que muchos atletas ignorarían, algunos hasta su muerte, que habían competido en los Juegos Olímpicos.

                        Las pruebas deportivas atrajeron a 58 731 participantes, pero según el COI, solo 997 atletas de 24 países, entre ellos 22 mujeres, compitieron en disciplinas que considera olímpicas. 
                        Fue la primera vez que las mujeres participaron en los Juegos Olímpicos; la tenista británica Charlotte Cooper fue la primera campeona olímpica en una competición individual. 
                        De un total de 477 pruebas deportivas celebradas, el COI solo reconoce 95, entre ellas tres deportes (pelota vasca, críquet y croquet) y algunos eventos (como el salto largo a caballo y la natación con obstáculos) hicieron su única aparición de la historia en el programa olímpico. 
                        Entre las competiciones no reconocidas se encuentran disciplinas como las de globos aerostáticos, pesca con caña, o de tiro con cañón, así como competiciones profesionales reservadas solo a franceses, pruebas con hándicap o competiciones escolares.

                        Con sus victorias en las pruebas de 60 metros lisos, 110 metros vallas, 200 metros vallas y salto de longitud, el atleta estadounidense Alvin Kraenzlein fue el principal vencedor de las pruebas reconocidas como olímpicas; tras la disputa de los Juegos de 2016, sigue siendo el único deportista que ha ganado cuatro títulos individuales de atletismo en unas olimpiadas en el mismo año. 
                        Un niño parisino de entre 7 y 12 años de edad del que se desconoce el nombre y que participó como timonel del dúo holandés que ganó una prueba de remo, probablemente sea el campeón olímpico más joven de la historia. Francia, país del que procedían más de la mitad de los atletas, dominó el medallero, establecido a posteriori en 101 medallas, 26 de ellas de oro, por delante de Estados Unidos (47 medallas, 19 de oro) y Reino Unido (30, 15 de oro).
                    </p>
                </article>

            </section>

            <aside class="col-md-4 d-flex flex-column" >
                <h5>Grandes atletas de la historia</h5>
                <ul class="mx-0 px-0 list-line align-bottom ">
                    <li>
                        <a href="">Jhony Weissmuller</a>
                    </li>
                    <li>
                        <a href="">Jesse Owens</a>
                    </li>
                    <li>
                        <a href="">Nadia Comaneci</a>
                    </li>
                    <li>
                        <a href="">Michael Phels</a>
                    </li>
                    <li>
                        <a href="">Usain Bolt</a>
                    </li>
                    <li>
                        <a href="">Simone Biles</a>
                    </li>
                </ul>
            </aside>

        </section>

        <div id="carouselExampleSlidesOnly" class="carousel slide row" data-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item" data-interval="2000">
                    <img src="../assets/img/Carrousel/juegos1.jpeg" data-interval="1000" class="d-block w-100" alt="juegos1">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/Carrousel/juegos2.jpeg" data-interval="1000" class="d-block w-100" alt="juegos2">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/Carrousel/juegos3.jpeg" data-interval="1000" class="d-block w-100" alt="juegos3">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/Carrousel/juegos4.jpeg" data-interval="1000" class="d-block w-100" alt="juegos4">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/Carrousel/juegos5.jpeg" data-interval="1000" class="d-block w-100" alt="juegos5">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/Carrousel/juegos6.jpeg" data-interval="1000" class="d-block w-100" alt="juegos6">
                </div>
            </div>
        </div>

        <footer>
            <section class="row d-flex">
                <section class="col-md-6">
                    <p>©2020 Copyright Daniel Queraltó Parra</p>
                </section>
                <section class="col-md-6 ">
                    <section class="mr-0 pr-0 ">
                        <a href="#"><img class="insta" src="../assets/img/instagram.png" alt="instagram"></a>
                        <a href="#"><img class="face" src="../assets/img/facebook.png" alt="facebook"></a>
                        <a href="#"><img class="twit" src="../assets/img/twitter.png" alt="twitter"></a>
                        <a href="https://github.com/dqueralto?tab=repositories"><img class="git" src="../assets/img/github.svg" alt="twitter"></a>

                    </section>
                </section>
            </section>
        </footer>
  </div>
    

</section>

</template>

<script lang="js">
export default {
    name: 'paqui-limpiadas',
    props: [],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="css" scoped>
.paqui-limpiadas {}

.loguillo {
    width: 15%;
}

.loguillo img {
    background-repeat: no-repeat;
    width: 100%;
}

.navegacion {
    width: 5em;
}
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/hero.jpeg");
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }

.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.cuerpo aside ul {
    list-style: none;
    margin-top: 2rem;

}

.cuerpo aside ul li {
    height: 3rem;

}

.carrusel img {
    width: 99%;
}

.cuerpo aside ul li:nth-of-type(odd) {
    background: linear-gradient(to bottom, #499bea 0%, #a6ccf0 5%, #a6ccf0 97%, #207ce5 100%);
}

.articulos article {
    border-bottom: 1px solid black;
}

.articulos img {
    background-color: burlywood;
}

footer .insta {
    background-repeat: no-repeat;
    width: 5%;
}

footer .face {
    background-repeat: no-repeat;
    width: 5%;
}

footer .twit {
    background-repeat: no-repeat;
    width: 5%;

}
footer .git {
    background-repeat: no-repeat;
    width: 5%;

}
</style>
