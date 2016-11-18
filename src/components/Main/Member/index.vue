<template>
  <div>
    <div class="col-sm-10 col-sm-push-1">
      <div class="card-group">
        <div class="card">
          <login></login>
        </div>
        <div class="card">
          <register></register>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Login from './Login'
  import Register from './Register'

  export default{
    components: {
      Login, Register
    }
  }
</script>