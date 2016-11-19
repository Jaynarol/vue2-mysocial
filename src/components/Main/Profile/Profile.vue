<template>
  <div class="main-box clearfix">
    <h2>{{profile.name}}</h2>
    <img :src="profile.image" alt="" width="120" height="120" class="profile-img img-responsive center-block show-in-modal">
    <div class="profile-details">
      <ul>
        <li>Following: <span>{{profile.following}}</span></li>
        <li>Followers: <span>{{profile.followers}}</span></li>
        <li>Posts: <span>{{profile.posts}}</span></li>
      </ul>
    </div>
    <div class="center-block text-center" v-if="!profile.isme" >
      <button class="btn" :class="{'btn-success': profile.mefollow || hoverFollowButton}" @mouseover="hoverFollowButton=true" @mouseout="hoverFollowButton=false" >{{ profile.mefollow ? hoverFollowButton ? 'Unfollow' : 'Following' : 'Follow'}}</button>
    </div>
  </div>
</template>


<script>
  import { fetchProfileApi } from '../../../api/profile'

  const profileInitial = {
    username: '',
    name: 'Loading...',
    image: '/static/imgs/friends/likes-1.png',
    following: 0,
    followers: 0,
    mefollow: false,
    isme: false,
    posts: 0,
  }

  export default{
    created () {
      this.fetchProfile()
    },
    data(){
      return {
        profile: profileInitial,
        hoverFollowButton: false
      }
    },
    watch: {
      '$route': 'fetchProfile'
    },
    methods: {
      fetchProfile(){
        const username = this.$store.state.route.params.profile;
        fetchProfileApi(username)
                .then((profile_result) => Object.assign(this.profile, profile_result))
                .catch(() => this.$router.push({name: 'home'}))
      }
    }
  }
</script>


<style scoped>
  .main-box {
    background: #FFFFFF;
    -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;
    -moz-box-shadow: 1px 1px 2px 0 #CCCCCC;
    -o-box-shadow: 1px 1px 2px 0 #CCCCCC;
    -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;
    box-shadow: 1px 1px 2px 0 #CCCCCC;
    margin-bottom: 16px;
    padding: 10px;
  }

  .main-box h2 {
    margin: 0 0 15px -10px;
    padding: 5px 0 5px 20px;
    border-left: 10px solid #c2c2c2; /*7e8c8d*/
  }

  .profile-img {
    border: 1px solid #e1e1e1;
    padding: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .profile-details {
    padding: 15px 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    margin: 15px 0;
  }

  .profile-details ul > li {
    margin: 3px 0;
    line-height: 1.5;
  }

  .profile-details ul > li > span {
    color: #337ab7;
  }
</style>