<template>
  <div class="chat-sidebar focus">
    <div class="list-group text-left">
      <p class="text-center chat-title">My Friends</p>
      <my-friend v-for="friend in myfriends" :friend="friend"></my-friend>
    </div>
    <div class="list-group text-left">
      <p class="text-center chat-title">My Following</p>
      <my-friend v-for="friend in myfollowing" :friend="friend"></my-friend>
    </div>
    <div class="list-group text-left">
      <p class="text-center chat-title">My Followers</p>
      <my-friend v-for="friend in myfollowers" :friend="friend"></my-friend>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { FRIENDS } from '../../store/types'
  import MyFriend from './MyFriend'

  export default{
    mounted() {
      this.$store.dispatch(FRIENDS.FETCH)
    },
    computed: {
      myfriends(){
        return this.friends.filter(({mefollow, followme})=>mefollow && followme)
      },
      myfollowing(){
        return this.friends.filter(({mefollow, followme})=>mefollow && !followme)
      },
      myfollowers(){
        return this.friends.filter(({mefollow, followme})=>!mefollow && followme)
      },
      ...mapState(['friends'])
    },
    components: {MyFriend}
  }
</script>
