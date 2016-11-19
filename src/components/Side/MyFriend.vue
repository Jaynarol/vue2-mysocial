<template>
  <router-link :to="friend.username" class="list-group-item">
    <img :src="friend.image" class="img-chat img-thumbnail">
    <span class="chat-user-name">{{friend.name}}</span>
  </router-link>
</template>

<script>
  export default{
    props:{
      friend: Object
    }
  }
</script>
