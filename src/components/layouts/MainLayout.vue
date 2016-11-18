<template>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <profile></profile>
      </div>
      <div class="col-md-8 col-xs-12">
        <new-post></new-post>
        <post-list></post-list>
      </div>
    </div>
</template>

<script>
  import Profile from '../Profile'
  import NewPost from '../NewPost'
  import PostList from '../PostList'

  export default{
    components:{
      Profile, NewPost, PostList
    }
  }
</script>
