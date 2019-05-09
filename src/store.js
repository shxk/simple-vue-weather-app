import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabFlagCurrent: null,
    locationSearch: null,
    weatherCache: null,
  },
  mutations: {
    setTabFlag: (state, payload) => state.isTabFlagCurrent = payload,
    setlocationSearch:(state,payload) => state.locationSearch = payload,
    setWeatherCache: (state, payload) => state.weatherCache = payload
  },
  actions: {

  },
  getters:{
    getTabFlag: (state) => state.isTabFlagCurrent,
    getlocationSearch: (state) => state.locationSearch,
    getWeatherCache: (state) => state.weatherCache,
  }
})
