<template>
  <div class="atom-exam">
    <div class="exam">
      <div class="exam-wrapper">
        <progress-bar ref="progress"/>
        <div id="question"><h5>Question</h5></div>
        <atom-builder/>
      </div>
      <div class="verify-bar">
        <button id="check" @click="$refs.progress.changeWidth()">Controleer</button>
      </div>
    </div>
    <div class="results">
      <div class="result-pair">
        <p class="result-amount">4</p>
        <p class="result-text">Te gaan</p>
      </div>
      <div class="result-pair">
        <p class="result-amount">4</p>
        <p class="result-text">Fouten</p></div>
      <div class="result-pair">
        <p class="result-amount">4</p>
        <p class="result-text">Gevraagd</p></div>

    </div>
  </div>
</template>

<script>
import AtomBuilder from "./AtomBuilder";
import ProgressBar from "./ProgressBar";

export default {
  name: "AtomExam",
  components: {
    AtomBuilder,
    ProgressBar
  }
}
</script>

<style scoped>

.atom-exam {
  /*background-color: blue;*/
  width: 60%;
  height: 80vh;
}

.exam {
  /*background-color:pink;*/
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0.5px solid;
  display: flex;
  flex-direction: column;
}


.exam-wrapper {
  background-color: lime;
  /*display: flex;*/
  /*flex-direction: column;*/
}

#question {
  background-color: white;
}

.verify-bar {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid black;
  width: 100%;
}

#check {
  font-family: Calibri;
  font-size: 5px;
  font-weight: bold;
  border: 0.5px solid black;
  background-color: orangered;
  border-radius: 3px;
  margin: 5px;
  padding: 3px 5px 3px 5px;
  color: white;


}

.results {
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  font-family: Calibri;
  color: white;

}

.result-pair {
  text-align: center;
}

.result-text {
  font-size: 8px;
}

.result-amount {
  font-size: 12px;
}

</style>