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
  import NavLayout from './components/Nav'
  import MainLayout from './components/Main'
  import SideLayout from './components/Side'
  import FootLayout from './components/Foot'

  export default {name: 'app', components: {NavLayout, MainLayout, SideLayout, FootLayout}}
</script>