<template>
  <button class="button posBut">+</button>
</template>

<script>
export default {
  name: "AddButton",
  props: {
    kind: String,
    functionality: Function,
    // e, n, p for the different kinds
  },
  methods: {
    addPart: function () {
      this.color = "red";
      // this.drawRect()
    }
  }
}
</script>

<style scoped>
  .posBut {
    background-color: green;
  }
</style>