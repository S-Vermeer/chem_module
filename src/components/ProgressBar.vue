<template>
  <div class="progress">
    <div class="progress" id="progress_done"
         v-bind:style="{ backgroundColor: backgroundDone, width: computedWidthDone + '%' }"/>
    <div class="progress" id="progress_togo" v-bind:style="{ backgroundColor: backgroundToGo, width: computedWidthToGo + '%' }"/>
  </div>

</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      backgroundDone: "darkorange",
      widthDone: 50,
      backgroundToGo: "black",
      widthToGo: 50
    }
  },
  computed: {
    computedWidthDone: function () {
      return this.widthDone;
    },
    computedWidthToGo: function () {
      return this.widthToGo;
    }
  }
  ,
  methods: {
    changeWidth: function (event) {
      this.widthDone = 75;
      this.widthToGo = 25;
    }
  },
  props: {
    currentQuestion: Number,
    totalQuestions: Number,
  }


}
</script>

<style scoped>

.progress {
  display: flex;
  height: 5px;
  border-bottom: 0.5px solid;
}
</style>