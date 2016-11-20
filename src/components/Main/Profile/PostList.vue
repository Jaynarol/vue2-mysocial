<template>
  <div>
    <post v-for="post in posts" :post="post" ></post>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {PROFILE} from '../../../store/types'
  import Post from './Post'

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
    computed: mapState(['route']),
    methods:{
      fetchPosts(){
        this.$store.dispatch(PROFILE.FETCH_POSTS, this.route.params.profile)
                .then((posts) => this.posts = posts)
      }
    },
    components: {
      Post
    }
  }
</script>
