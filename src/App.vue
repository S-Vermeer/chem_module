<template>
  <div id="app">
    <periodic-system msg="Atom Builder"/>
    <atom-builder />
    <router-view />
  </div>
</template>

<script>


import PeriodicSystem from './components/PeriodicSystem.vue'
import AtomBuilder from './components/AtomBuilder.vue'

export default {
  name: 'app',
  components: {
    PeriodicSystem,
    AtomBuilder,
  }
}

</script>

<style>

</style>