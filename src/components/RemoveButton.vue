<template>
  <button class="button negBut" v-on:click=functionality>{{ msg }}</button>
</template>

<script>
export default {
  name: "RemoveButton",
  data: function () {
    return {
      msg: '-',
    }
  },
  props: {
    kind: String,
    functionality: Function
    // e, n, p for the different kinds
  },
  methods: {
    removeItem: function() {

    },
    mounted() {
      this.functionality()
    }
  }

}
</script>

<style scoped>
  .negBut {
    background-color: red;
  }
</style>