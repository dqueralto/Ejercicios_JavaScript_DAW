<template lang="html">

  <section class="lista">
    <h1>lista Component</h1>
    <section>
        <input type="text" size="74" v-model="texNota" v-on:keyup.enter="addRecord">      
        <button class="btn btn-success" v-on:click="addRecord">+</button>
        {{salto}}
        <label class="">Filtro:</label>
        <input type="text" size="71" v-model="rating" v-on:keyup.enter="ordenar">     
    </section>
  </section>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'lista',
    props: ["text"],

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

<style scoped lang="css">
  .lista {

  }
</style>
