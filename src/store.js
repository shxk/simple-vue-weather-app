import Vue from 'vue'
import Vuex from 'vuex'
import service from '@/service.js'


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
    async searchLocation({ getters, commit, dispatch }, payload) {
      let wF = await service.getWeather(payload + '&days=7');
      commit('setWeatherCache', wF)
    }
  },
  getters:{
    getTabFlag: (state) => state.isTabFlagCurrent,
    getlocationSearch: (state) => state.locationSearch,
    getWeatherCache: (state) => state.weatherCache,
  }
})
