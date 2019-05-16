<template>
  <div>
    <v-container class="displaytab">
        <v-tabs fixed-tabs slider-color="blue">
          <v-tab @click.prevent="setTabCurrent(true)">Current</v-tab>
          <v-tab @click.prevent="setTabCurrent(false)">7 Day Forecast</v-tab>
        </v-tabs>
    </v-container>
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
  .displaytab{
    margin-top: -50px;
  }
</style>