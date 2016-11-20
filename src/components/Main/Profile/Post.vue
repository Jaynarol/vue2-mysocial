<template>
  <div class="box box-widget">

    <div class="box-header with-border">
      <div class="user-block">
        <img class="img-circle" :src="post.image" alt="User Image">
        <span class="username"><router-link :to="post.username">{{post.name}}</router-link></span>
        <span class="description">Shared publicly - {{post.time}}</span>
      </div>
    </div>

    <div class="box-body" style="display: block;">
      <p class="message">{{post.message}}</p>
      <div class="box-action">
        <button type="button" class="btn btn-default btn-xs" @click="clickLike">Like</button>
        <span class="pull-right text-muted">{{post.like}} likes</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    props: {
      post: Object
    },
    methods:{
      clickLike(){
        alert('==============================\n\nThis function not available (lazy :P)\n\n===============================')
      }
    }
  }
</script>

<style scoped>
  .box-action{
    margin-top: 20px;
  }
  .message{
    display: block;
    white-space: pre-wrap;
    line-height: 1.8em;
  }
</style>