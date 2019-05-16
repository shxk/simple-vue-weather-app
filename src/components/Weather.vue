<template>
  <div v-if="weatherCache!=null">
    <v-container class="areaInfo">
        <h4>{{weatherCache.location.name}}</h4>
        <h5>{{weatherCache.location.region}}</h5>
        <h5>{{weatherCache.location.country}}</h5>
    </v-container>

    <v-container class="currentCondition" v-if="isTabFlagCurrent">
      <img v-bind:src="weatherCache.current.condition.icon" />
      <h3>{{weatherCache.current.feelslike_c}}°c</h3>
      <h3>{{weatherCache.current.condition.text}} </h3>
    </v-container>

    <v-container v-if="!isTabFlagCurrent">
        <b-row name>
          <b-col v-for="day in weatherCache.forecast.forecastday" :key="day.id">
              <img v-bind:src="day.day.condition.icon" />
              <p>Avg Temp: {{day.day.avgtemp_c}}°c</p>
              <p>{{day.day.condition.text}}</p>
              <p>{{day.date}}</p>
          </b-col>
        </b-row>
    </v-container>
 
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'Weather',
  data(){
    return{
      weatherForecast: null,
    }
  },
  mounted(){
    store.commit('setTabFlag',true)
    store.dispatch('searchLocation', 'London')
  },
  computed:{
    weatherCache:() => store.getters['getWeatherCache'],
    isTabFlagCurrent: () => store.getters['getTabFlag'],
  }
}
</script>

<style scoped lang="scss">
  .currentWeatherIcon {
    width: 10%;
    height: 10%;
  }
</style>
