<template>
  <div class="box n-border-top">
    <textarea class="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?" v-model="mystatus" ></textarea>
    <div class="box-form clearfix">
      <button type="button" class="btn btn-azure pull-right" @click="handleMyStatus" >Post</button>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        mystatus: ''
      }
    },
    methods: {
      handleMyStatus(){
        this.$emit('handleMyStatus', this.mystatus)
        this.mystatus = ''
      }
    }
  }
</script>

<style scoped>
 .p-text-area{
   color: black;
 }
</style>