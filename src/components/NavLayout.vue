<template>
  <nav class="navbar navbar-white navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/"><b>MySocial</b></router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/login">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import VueRouter from 'vue-router'

  export default{}
</script>