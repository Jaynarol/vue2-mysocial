<template>
  <div class="row">
    <div class="col-md-4 col-xs-12">
      <div class="row-xs">
        <profile></profile>
      </div>
    </div>
    <div class="col-md-8 col-xs-12">
      <div class="row-xs">
        <new-post></new-post>
        <post-list></post-list>
      </div>
    </div>
  </div>
</template>

<script>
  import Profile from './Profile/Profile'
  import NewPost from './Profile/NewPost'
  import PostList from './Profile/PostList'

  export default{components: {Profile, NewPost, PostList}}
</script>
