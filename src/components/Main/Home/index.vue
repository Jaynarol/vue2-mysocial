<template>
  <div>
    <h2>All Activity</h2>
    <hr />
    <post v-for="post in homeposts" :post="post"></post>
  </div>
</template>

<script>
  import { FRIENDS } from '../../../store/types'
  import Post from '../Profile/Post'

  export default{
    data(){
      return {
        homeposts: []
      }
    },
    created (){
      this.$store.dispatch(FRIENDS.FETCH_HOMEPOST)
              .then((homeposts) => this.homeposts = homeposts)
    },
    components: {
      Post
    }
  }
</script>
