<template>
  <div class="card-block">
    <form @submit.prevent="login" >
      <div class="center">
        <h4 class="m-b-0"><span class="icon-text">Login</span></h4>
        <p class="text-muted">Access your account</p>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Username" required v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required v-model="password">
        <div class="clearfix"></div>
      </div>
      <div class="center">
        <button type="submit" class="btn btn-azure" >Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { AUTH } from '../../../store/types'

  export default{
    data: function() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        this.$store.dispatch(AUTH.LOGIN, {
          username: this.username,
          password: this.password
        }).then(this.$router.push({name: 'home'}))
      }
    }
  }
</script>
