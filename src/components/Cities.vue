<template>
  <div class="cities" v-if="searchPlaces.length > 0">
    <transition-group name="cities">
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
import CitiesItem from './CitiesItem.vue';

export default {
  props: {
    searchPlaces: {
      type: Array,
      required: true,
    },
  },
  components: {
    CitiesItem,
  },
  methods: {
    setLocation(city) {
      this.$emit('update:currentCity', city);
    },
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
