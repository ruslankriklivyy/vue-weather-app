<template>
  <div class="cities-item">
    <div class="cities-item__name">{{ city.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
