<template>
  <router-view></router-view>
</template>

<script>
  import Profile from './Profile'
  import Member from './Member'
  import Home from './Home'

  export default{
    components: {Profile, Member, Home}
  }
</script>
