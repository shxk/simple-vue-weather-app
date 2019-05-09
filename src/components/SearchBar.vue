<template>
  <div>
    <b-container>
        <b-input-group prepend="Location" class="mt-3">
          <b-form-input v-model="searchValue" @keyup.enter.native="searchLocation(searchValue)"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success"  @click.prevent="searchLocation(searchValue)">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-container>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'SearchBar',
  data(){
    return{
      searchValue: null,
    }
  },
  methods:{
    searchLocation: function(payload){

      let apiUrl = 'https://api.apixu.com/v1/forecast.json?key=b26ac48768b64da2aae125932190705&q=' + payload + '&days=7'

      let wF = fetch(apiUrl)
      .then(res => res.json())
      .then(data => {store.commit('setWeatherCache', data)});
    }
  }
}
</script>

<style scoped lang="scss">

</style>