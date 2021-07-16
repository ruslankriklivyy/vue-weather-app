import { fetchGeolocation, fetchCurrentWeather, fetchBySearchCity } from '../api/api';
import { getTemp } from '../utils/utils';

export const weatherModule = {
  state: () => ({
    currentWeather: {},
    currentCity: {},
    searchQuery: '',
    searchPlaces: [],
    currentUnit: 'C',
    currentType: 'Week',
    country: {},
    tempMax: 0,
    tempMin: 0,
  }),
  mutations: {
    setCountry(state, country) {
      state.country = country;
    },
    setCurrentWeather(state, currentWeather) {
      state.currentWeather = currentWeather;
    },
    setTempMax(state, tempMax) {
      state.tempMax = tempMax;
    },
    setTempMin(state, tempMin) {
      state.tempMin = tempMin;
    },
    setSearchQuery(state, val) {
      if (val !== '') {
        fetchBySearchCity(val).then((res) => (state.searchPlaces = res));
      } else {
        state.searchPlaces = [];
      }
    },
    setCurrentUnit(state, currentUnit) {
      state.currentUnit = currentUnit;
    },
    setCurrentType(state, currentType) {
      state.currentType = currentType;
    },
    setCurrentCity(state, obj) {
      const newObj = {
        city: obj.city,
        country: obj.countryCode,
        loc: `${obj.latitude},${obj.longitude}`,
      };
      state.country = newObj;
      fetchCurrentWeather(obj.latitude, obj.longitude).then((res) => {
        state.currentWeather = res;
        state.tempMax = getTemp(state.currentUnit, res.current.temp);
        state.tempMin = getTemp(state.currentUnit, res.daily[0].temp.min);
      });
      state.searchPlaces = [];
      state.searchQuery = '';
    },
  },
  actions: {
    fetchDataWeather({ state, commit }) {
      if (localStorage.getItem('geolocation')) {
        const countryInfo = JSON.parse(localStorage.getItem('geolocation'));
        commit('setCountry', countryInfo);
        const loc = fetchGeolocation();
        fetchCurrentWeather(loc[0], loc[1]).then((res) => {
          commit('setCurrentWeather', res);
          commit('setTempMax', getTemp(state.currentUnit, res.current.temp));
          commit('setTempMin', getTemp(state.currentUnit, res.daily[0].temp.min));
        });
      } else {
        fetchGeolocation().then((res) => {
          const locations = res.loc.split(',');
          commit('setCountry', res);
          fetchCurrentWeather(locations[0], locations[1]).then((res) => {
            this.currentWeather = res;
            commit('setTempMax', getTemp(state.currentUnit, res.current.temp));
            commit('setTempMin', getTemp(state.currentUnit, res.daily[0].temp.min));
          });
        });
      }
    },
  },
  namespaced: true,
};
