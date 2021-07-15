<template>
  <div class="today-highlights-item">
    <div class="today-highlights-item__name">UV Index</div>
    <div className="today-highlights__UVIndex">
      <span className="UVIndex__title">{{ Math.round(uvi) }}</span>
      <span className="UVIndex__face six">6</span>
      <span className="UVIndex__face nine">9</span>
      <span className="UVIndex__face twelve">12</span>
      <div className="today-highlights__UVIndex__diagrams">
        <canvas className="UVIndex__diagram-main" ref="diagramMain"></canvas>
        <canvas className="UVIndex__diagram" ref="diagram"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uvi: {
      type: Number,
      required: true,
    },
    currentWeather: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.$refs.diagramMain) {
      const ctx = this.$refs.diagramMain.getContext('2d');

      const calculation =
        -3.14 - (((Math.round(this.currentWeather.uvi) * 100) / 15) * -3.14) / 100;

      ctx.beginPath();
      ctx.arc(150, 145, 130, 3.14, calculation.toFixed(2), false);
      ctx.strokeStyle = '#66a0fd';
      ctx.lineWidth = 30;
      ctx.stroke();
    }
    if (this.$refs.diagram) {
      const ctx2 = this.$refs.diagram.getContext('2d');

      ctx2.beginPath();
      ctx2.arc(150, 145, 130, 3.14, 0, false);
      ctx2.strokeStyle = '#F3F3F3';
      ctx2.lineWidth = 15;
      ctx2.stroke();
    }
  },
};
</script>

<style lang="scss" scoped></style>
