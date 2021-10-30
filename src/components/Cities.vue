<template>
  <div class="cities" v-if="searchPlaces?.length > 0">
    <transition-group name="cities" tag="div">
      <cities-item
        v-for="city in searchPlaces"
        :key="city"
        :city="city"
        @click="setLocation(city)"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CitiesItem from './CitiesItem.vue';

export default {
  components: {
    CitiesItem,
  },
  methods: {
    setLocation(city) {
      this.setCurrentCity(city);
    },
    ...mapMutations({
      setCurrentCity: 'weather/setCurrentCity',
    }),
  },
  computed: {
    ...mapState({
      searchPlaces: (state) => state.weather.searchPlaces,
    }),
  },
};
</script>

<style lang="scss" scoped>
.cities-enter-active,
.cities-leave-active {
  transition: all 1s ease;
}
.cities-enter-from,
.cities-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.cities-move {
  transition: transform 0.8s ease;
}
.cities {
  position: absolute;
  top: 100px;
  border-radius: 10px;
  overflow: hidden;
  width: 70%;
  &-item {
    background: #f9fafc;
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background: #66a0fd;
      color: #fff;
    }

    &__name {
      font-size: 18px;
    }
  }
}
</style>
