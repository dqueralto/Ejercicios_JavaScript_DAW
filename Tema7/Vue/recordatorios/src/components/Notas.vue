<template lang="html">
  <section class="notas  mh-100 ">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mx-0" >
      <div class=" collapse navbar-collapse " id="navbarTogglerDemo02">
          
          <ul class="navbar-nav mx-auto mt-2 mt-sm-0 ">
              <li class="nav-item active">
                <router-link class="nav-link" to="/PaquiLimpiadas"> PaquiLimpiadas </router-link>
              </li>
              <li class="nav-item active">
                  <router-link class="nav-link " to="/Noticias">Noticias</router-link>
              </li>
          </ul>
      </div>
    </nav>
    <section class="ml-3">
      
        <section>
          <section class="center-block fondo ml-0">
            <section class="mt-3">
              <input  class="rounded" type="text" size="74" v-model="texNota" v-on:keyup.enter="addRecord">      
              <button class="btn btn-success ml-1" v-on:click="addRecord">+</button>
            </section>
            <section class="my-3">
              <label class="mr-1">Filtro:</label>
              <input class="rounded" type="text" size="71" v-model="filtro">
            </section>

            <section class="container m-0 p-0">
              <ul >
                <transition-group
                  name="staggered-fade"
                  v-on:leave="leave"
                      
                  v-on:enter="enter"


                >
                  <li class="border rounded border-white mb-3 row" v-for="(recuerda, index) in ordenarRecordatorios" v-bind:key="recuerda.text"  v-bind:data-index="index">
                    <section class="col-11">
                      <section class=" text-justified py-2 row " v-bind:class="{sub:recuerda.checked}" >
                        <input class="mr-3" type="checkbox"  value="recuerda.text" v-model="recuerda.checked"  aria-label="Text input with checkbox">
                        <label><span></span></label>
                        <p>{{recuerda.text}}</p>
                      </section>
                      <section class="row">
                        <label>Prioridad: </label>
                        <button class="btn py-1 bt-bajo ml-2">Baja</button>
                        <button class="btn py-1 bt-medio ml-2" >Media</button>
                        <button class="btn py-1 bt-alto ml-2" >Alta</button>
                      </section>

                    </section>
                    <section class="col-1 p-0">
                      <button class=" btn-danger float-right btDel w-100 h-100 rounded-right " v-on:click="delRecord(recuerda)">X</button>
                    </section>
                  </li>
                </transition-group>
              </ul>
            </section>
            <label>Completadas: {{totalcompletadas}} de {{total}}</label>
          </section>
          
          <button class=" btn btn-danger" v-on:click="delCompletadas">Borrar completadas</button>
        </section>
    





    
    </section>
    <FooterNotas></FooterNotas>
  </section>
</template>

<script lang="js">
import FooterNotas from './FooterNota.vue';
import Velocity from 'velocity-animate';
/*import Vue from 'vue'
Vue.use(Velocity);*/
  export default  {
    name: 'notas',
    props: [],
    mounted () {
      if (localStorage.getItem('recordatorios')) {
          try {
            this.recordatorios = JSON.parse(localStorage.getItem('recordatorios'));
          } catch(e) {
            localStorage.removeItem('recordatorios');
          }
      }
    },
    data () {
      return {
        texNota:'',
        rating: 0,
        filtro:'',
        completadas:[],
        total:0,
        recordatorios: [ ]
      }
    },
    methods: {
      ordenacion:function(a, b) {
            if (a.text < b.text)
                return -1;
            if (a.text > b.text)
                return 1;
            return 0;
        },

        addRecord: function (){
            if (this.texNota.trim().length !=0) {
                this.recordatorios.push({text:this.texNota,checked:false, priority:this.rating} );
                this.texNota='';
                this.saveRecor();
            }
        },

        cambiarCompletada: function(tarea) {
          tarea.completada = !tarea.completada;
        },
        

        corregirInfoCompletadas:function(){
            if (this.recordatorios.length < 1) 
            {
                this.total = 0;
                this.totalcompletadas = 0;
            }
        },

        delCompletadas: function (){
            for (let index = this.recordatorios.length -1 ; index >= 0; index--) {
                if (this.recordatorios[index].checked) 
                {
                    this.recordatorios.splice(index,1);
                }
                this.saveRecor();
            }
        },

        delRecord:function (obj){
            if (this.recordatorios.length) 
            {
                var index = this.recordatorios.indexOf(obj);
                if (index > -1) 
                {
                    this.total-=1;
                    if (obj.checked) 
                    {
                        this.totalcompletadas-=1;
                    }
                    this.recordatorios.splice(index, 1);
                }
            }
        },
        
        saveRecor(){
            const parsed = JSON.stringify(this.recordatorios);
            localStorage.setItem('recordatorios', parsed);
        },

        beforeEnter: function (name) {
          name.style.opacity = 0
          name.style.height = 0
        },
        enter: function (name, done) {
          var delay = name.dataset.index * 100
          setTimeout(function () {
            Velocity(
              name,
              { opacity: 1},// height: '1.6em' },
              { complete: done }
            )
          }, delay)
        },
        leave: function (name, done) {
          var delay = name.dataset.index * 100
          setTimeout(function () {
            Velocity(
              name,
              { opacity: 0, height: 0 },
              { complete: done }
            )
          }, delay)
        }

    },

    computed:{
      ordenarRecordatorios: function () { 
        return this.recordatorios.slice().sort(this.ordenacion);
      },

      totalcompletadas : function(){ 
        return this.recordatorios.filter(function(record){
            return record.checked == true;
        }).length;
      },

      computedList: function () {
        var self = this
        return this.recordatorios.filter(function (recordatorio) {
          return recordatorio.text.toLowerCase().indexOf(self.filtro.toLowerCase()) !== -1
      })
    }
    },
    components:{
      FooterNotas
    },
    updated: function () {
        this.total = this.recordatorios.length;
        this.corregirInfoCompletadas();
        this.saveRecor();
    }
    
}


</script>

<style scoped lang="css">
  .notas {
    color: white;
    background-color: black;

  }
  .fondo{
    background-color: black;

  }

  /*.btDel{
      margin-right: 0%;
  }*/

  ul{
    list-style:none;
  }
  li{
    font-size: 1rem;
  }

  .bt-bajo{background-color:#cd7f32}
  .bt-medio{background-color:#8a9597}
  .bt-alto{background-color:#ffbf00}
  .sub{
    text-decoration:line-through;
    color: green;
  }

  .defCajas{
    border: 1;
    
  }
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]+ label {
    display: inline-block;
    height: 48px;
    width: 48px;
    vertical-align: middle;
    background: url(../assets/img/checkbox-unchecked.png);
    background-size: cover;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label span {
    background: url(../assets/img/checkbox-checked.png);
    background-size: cover;
  }
  /*
  input[type="checkbox"] {
  display: none;
  }

  input[type="checkbox"] + label span {
    display: inline-block;
    height: 48px;
    width: 48px;
    vertical-align: middle;
    background: url(../assets/img/checkbox-unchecked.png);
    background-size: cover;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label span {
    background: url(../assets/img/checkbox-checked.png);
    background-size: cover;
  }*/
</style>
