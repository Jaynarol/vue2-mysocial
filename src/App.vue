<template>
  <div id="app">
    <nav-layout></nav-layout>
    <div class="container page-content">
      <main-layout></main-layout>
      <side-layout></side-layout>
    </div>
    <foot-layout></foot-layout>
  </div>
</template>

<script>
  import NavLayout from './components/layouts/NavLayout'
  import MainLayout from './components/layouts/MainLayout'
  import SideLayout from './components/layouts/SideLayout'
  import FootLayout from './components/layouts/FootLayout'

  export default {
    name: 'app',
    components: {
      NavLayout, MainLayout, SideLayout, FootLayout
    }
  }
</script>
