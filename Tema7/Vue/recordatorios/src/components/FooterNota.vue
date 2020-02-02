<template lang="html">
  <footer class="footer-notas bg-dark row">
    
    <section class="col-sm-10">
      <p>© Daniel Queralto Parra</p>
    </section>
    <section class="col-sm-2">
      <a href="https://github.com/dqueralto?tab=repositories"><img class="twit" src="../assets/img/github.svg" alt="twitter"></a>
    </section>

  </footer>
</template>

<script lang="js">
  

  export default  {
    name: 'footer-notas',
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

<style scoped lang="css">
  .footer-notas {

  }

  footer .twit {
    background-repeat: no-repeat;
    width: 20%;

}
</style>
