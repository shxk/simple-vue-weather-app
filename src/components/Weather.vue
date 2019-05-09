<template>
  <div>
    <div>
      <h4>{{weatherCache.location.name}}</h4>
      <h5>{{weatherCache.location.region}}</h5>
      <h5>{{weatherCache.location.country}}</h5>
      <br/>
    </div>

    <div v-if="isTabFlagCurrent">
      <h3>{{weatherCache.current.feelslike_c}}°c</h3>
      <p><h3>{{weatherCache.current.condition.text}} </h3> </p>
      <img class="currentWeatherIcon" v-bind:src="weatherCache.current.condition.icon" />
    </div>

    <div v-if="!isTabFlagCurrent"> 
      <b-container>
        <b-row>
          <b-col v-for="day in weatherCache.forecast.forecastday" :key="day.id">
            <p>{{day.date}}</p>
            <p>Avg Temp: {{day.day.avgtemp_c}}°c</p>
            <p>{{day.day.condition.text}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col v-for="day in weatherCache.forecast.forecastday" :key="day.id">
            <img v-bind:src="day.day.condition.icon"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
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

    const context = this;
    let wF = fetch('https://api.apixu.com/v1/forecast.json?key=b26ac48768b64da2aae125932190705&q=London&days=7')
    .then(res => res.json())
    .then(data => {store.commit('setWeatherCache', data)});
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
