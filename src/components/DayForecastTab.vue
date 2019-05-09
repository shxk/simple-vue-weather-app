<template>
  <div>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Current" @click.prevent="setTabCurrent(true)" active></b-tab>
      <b-tab title="7 Day Forecast" @click.prevent="setTabCurrent(false)"></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'DayForecastTab',
  data(){
    return{
      
    }
  },
  methods:{
    setTabCurrent:function(payload){
      store.commit('setTabFlag', payload)
    }
  },
}  
</script>


<style scoped lang="scss">

</style>