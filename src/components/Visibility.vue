<template>
  <div class="today-highlights-item">
    <div class="today-highlights-item__name">Visibility</div>
    <div class="today-highlights-item__index">{{ visibility / 1000 }} <span>km/h</span></div>
    <p class="today-highlights-item__descr">{{ visibilityStatus }}</p>
  </div>
</template>

<script>
export default {
  props: {
    visibility: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      visibilityStatus: '',
    };
  },
  mounted() {
    if (this.visibility <= 45) {
      this.visibilityStatus = 'Dense fog';
    }
    if (this.visibility > 45 && this.visibility <= 275) {
      this.visibilityStatus = 'Thick fog';
    }
    if (this.visibility > 275 && this.visibility <= 550) {
      this.visibilityStatus = 'Fog';
    }
    if (this.visibility > 550 && this.visibility <= 805) {
      this.visibilityStatus = 'Moderate fog';
    }
    if (this.visibility > 805 && this.visibility <= 1610) {
      this.visibilityStatus = 'Mist or thin fog';
    }
    if (this.visibility > 1610 && this.visibility <= 3220) {
      this.visibilityStatus = 'Poor visibility';
    }
    if (this.visibility > 3220 && this.visibility <= 8050) {
      this.visibilityStatus = 'Moderate visibility';
    }
    if (this.visibility > 8050 && this.visibility <= 16100) {
      this.visibilityStatus = 'Good visibility';
    }
    if (this.visibility > 16100 && this.visibility <= 48300) {
      this.visibilityStatus = 'Very good visibility';
    }
    if (this.visibility > 48300) {
      this.visibilityStatus = 'Exceptional visibility';
    }
  },
};
</script>

<style lang="scss" scoped></style>
