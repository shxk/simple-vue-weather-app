<template>
  <div>
      <v-container>
        <v-layout >
          <v-flex xs12 sm12 md12 lg6 offset-lg3 offset-md1>
            <v-text-field
            solo 
            label="Search Location" 
            v-model="searchValue" 
            @keyup.enter.native="searchLocation(searchValue)"
            append-icon="search"
            @click:append="searchLocation(searchValue)"
            >
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import store from '@/store.js'
import service from '@/service.js'
export default {
  name: 'SearchBar',
  data(){
    return{
      searchValue: null,
    }
  },
  methods:{
    searchLocation(payload){
      store.dispatch('searchLocation',payload);
    }
  }
}
</script>

<style scoped lang="scss">
  .searchbar{
    width: 50%;
  }

</style>