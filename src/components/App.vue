<template>
  <div id="app">
    <nav-layout></nav-layout>
    <div class="container page-content">
      <main-layout></main-layout>
      <side-layout v-if="auth.login" ></side-layout>
    </div>
    <foot-layout></foot-layout>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NavLayout from './Nav'
  import MainLayout from './Main'
  import SideLayout from './Side'
  import FootLayout from './Foot'

  export default {
    computed: mapState([
      'auth'
    ]),
    components: {NavLayout, MainLayout, SideLayout, FootLayout}
  }

</script>