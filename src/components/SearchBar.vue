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

</style>