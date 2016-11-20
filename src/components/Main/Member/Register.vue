<template>
  <div class="card-block center">
    <h4 class="m-b-0">
      <span class="icon-text">Sign Up</span>
    </h4>
    <p class="text-muted">Create a new account</p>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Full Name">
    </div>
    <div class="form-group">
      <input type="email" class="form-control" placeholder="Email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Confirm Password">
    </div>
    <button class="btn btn-azure" @click="clickRegister">Register</button>
  </div>
</template>

<script>
  export default{
    methods:{
      clickRegister(){
        alert('==============================\n\nThis function not available (lazy :P)\n\n===============================')
      }
    }
  }
</script>
