<template>
  <div id="app">
    <div class="exam">
      <atom-exam/>
    </div>
    <!--    <periodic-system msg="Atom Builder"/>-->
    <!--    <atom-builder />-->
    <!--    <router-view />-->
  </div>
</template>

<script>


// import PeriodicSystem from './components/PeriodicSystem.vue'
// import AtomBuilder from './components/AtomBuilder.vue'
import AtomExam from "./components/AtomExam";

export default {
  name: 'app',
  components: {
    AtomExam,
    // PeriodicSystem,
    // AtomBuilder,
  }
}

</script>

<style>
body {
  background-color: #333333
}
.exam {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>