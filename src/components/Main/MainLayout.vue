<template>
  <router-view></router-view>
</template>

<script>
  import ProfileLayout from './Profile/ProfileLayout'
  import MemberLayout from './Member/MemberLayout'
  import HomeLayout from './Home/HomeLayout'

  export default{
    components: {ProfileLayout, MemberLayout, HomeLayout}
  }
</script>
