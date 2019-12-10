<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from '@/layout/header.vue'
  import Footer from '@/layout/footer.vue'
  export default {
    components: {
      Header,
      Footer
    },
    data () {
      return {

      }
    },
    created () {

    },
    computed: {

    },
    methods: {

    }
  }
</script>
<style lang="scss">

</style>
