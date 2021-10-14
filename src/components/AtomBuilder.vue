<template>
  <div class="atom-builder">
    <div class="atom-display">
      <canvas id="c"></canvas>
    </div>
<!--    <div>-->
<!--      <button @click="drawRect">draw</button>-->
<!--      <button @click="addWidth">+</button>-->
<!--      <button @click="subWidth">-</button>-->
<!--    </div>-->
    <div class="atom-builder-buttons">
      <Nucleus xPos=50 yPos=50 radius=10 />

      <div class="atom-interact">
        <add-button :kind="e"/>
        <remove-button :kind="e"/>
        <p class="label">Elektronen</p>

      </div>
      <div class="atom-interact">
        <add-button :kind="n"/>
        <remove-button :kind="n"/>
        <p class="label">Neutronen</p>

      </div>
      <div class="atom-interact">
        <add-button :kind="p"/>
        <remove-button :kind="p"/>
        <p class="label">Protonen</p>

      </div>
    </div>
  </div>
</template>

<script>
import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";
import Nucleus from "./Nucleus";

export default {
  name: "AtomBuilder",
  components: {
    Nucleus,
    RemoveButton,
    AddButton,
  },
  data: function () {
    return {
      message: 'Vue + Canvas API',
      vueCanvas: null,
      rectWidth: 200
    }
  },
  mounted() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    this.vueCanvas = ctx;
  },
  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },
    addWidth() {
      this.rectWidth += 10
      this.drawRect()
    },
    subWidth() {
      this.rectWidth -= 10
      this.drawRect()
    }
  }
}

</script>

<style scoped>
.atom-interact {
  padding: 5px;


}

.atom-builder-buttons {
  /*background-color: blue;*/
  width: 30%;
  display: flex;
  justify-content: space-between;
}

.atom-display {
  /*background-color: pink;*/
  width: 150px;
  padding: 10px;
}

.button {
  border-radius: 25px;
  border: none;
  width: 20px;
  height: 20px;
  color: white;
  font-size: 15px;
  margin-top: 5px;
}

#c {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}

.atom-builder {
  display: flex;
}

.label {
  font-size: 6px;
}
</style>