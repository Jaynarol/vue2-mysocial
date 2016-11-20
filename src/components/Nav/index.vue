<template>
  <nav class="navbar navbar-white navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/"><b>MySocial</b></router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul v-if="auth.login" class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="{ path: auth.username }">@{{auth.username}}</router-link>
          </li>
          <li><a @click.prevent="logout" href="#">Logout</a></li>
        </ul>
        <ul v-if="!auth.login" class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  import { AUTH } from '../../store/types'

  export default{
    computed: mapState([
      'auth'
    ]),
    methods: {
      logout() {
        this.$store.dispatch(AUTH.LOGOUT)
                .then(this.$router.push('login'))
      }
    }
  }
</script>