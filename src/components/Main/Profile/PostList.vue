<template>
  <div>
    <new-post v-if="auth.username===route.params.profile" @handleMyStatus="postMyStatus" ></new-post>
    <post v-for="post in posts" :post="post" ></post>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {PROFILE} from '../../../store/types'
  import Post from './Post'
  import NewPost from './NewPost'

  export default{
    created (){
      this.fetchPosts()
    },
    watch: {
      '$route': 'fetchPosts'
    },
    data(){
      return {
        posts: []
      }
    },
    computed: mapState(['auth','route']),
    methods:{
      fetchPosts(){
        this.$store.dispatch(PROFILE.FETCH_POSTS, this.route.params.profile)
                .then((posts) => this.posts = posts)
      },
      postMyStatus(mystatus){
        this.$store.dispatch(PROFILE.POST_MYSTATUS, mystatus)
                .then((newpost) => this.posts.unshift(newpost))
      }
    },
    components: {
      Post, NewPost
    }
  }
</script>
