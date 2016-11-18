<template>
  <div class="chat-sidebar focus">
    <div class="list-group text-left">
      <p class="text-center visible-xs"><a href="#" class="hide-chat btn btn-success">Hide</a></p>
      <p class="text-center chat-title">My Following</p>
      <my-following></my-following>
      <my-following></my-following>
      <my-following></my-following>
    </div>
  </div>
</template>

<script>
  import MyFollowing from './MyFollowing'
  export default{components: {MyFollowing}}
</script>
