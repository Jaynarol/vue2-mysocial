<template>
  <div class="row">
    <div class="col-md-4 col-xs-12">
      <div class="row-xs">
        <profile></profile>
      </div>
    </div>
    <div class="col-md-8 col-xs-12">
      <div class="row-xs">
        <new-post v-if="auth.username===route.params.profile" ></new-post>
        <post-list></post-list>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Profile from './Profile'
  import NewPost from './NewPost'
  import PostList from './PostList'

  export default{
    computed:mapState(['auth', 'route']),
    components: {
      Profile, NewPost, PostList
    }
  }
</script>
