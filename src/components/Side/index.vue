<template>
  <div class="chat-sidebar focus">
    <div class="list-group text-left">
      <p class="text-center visible-xs"><a href="#" class="hide-chat btn btn-success">Hide</a></p>
      <p class="text-center chat-title">My Following</p>
      <my-following v-for="friend in friends" :friend="friend"></my-following>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { FRIENDS } from '../../store/types'
  import MyFollowing from './MyFollowing'

  export default{
    mounted() {
      this.$store.dispatch(FRIENDS.FETCH)
    },
    computed: mapState(['friends']),
    components: {MyFollowing}
  }
</script>
