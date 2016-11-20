<template>
  <div class="row">
    <div class="col-md-4 col-xs-12">
      <div class="row-xs">
        <profile></profile>
      </div>
    </div>
    <div class="col-md-8 col-xs-12">
      <div class="row-xs">
        <post-list></post-list>
      </div>
    </div>
  </div>
</template>

<script>
  import Profile from './Profile'
  import PostList from './PostList'

  export default{
    components: {
      Profile, PostList
    }
  }
</script>
