<template>
  <div class="atom-builder">
    <div class="atom-display">
      <canvas id="c"></canvas>
    </div>

    <div class="atom-builder-buttons">
<!--      <Nucleus xPos=50 yPos=50 radius=10 />-->

      <div class="atom-interact">
        <add-button :kind="e" @click.native="addWidth"/>
        <remove-button :kind="e" @click.native="subWidth"/>
        <p class="label">Elektronen</p>

      </div>
      <div class="atom-interact">
        <add-button :kind="n" @click.native="addWidthColored('blue')"/>
        <remove-button :kind="n" @click.native="subWidthColored('blue')"/>
        <p class="label">Neutronen</p>

      </div>
      <div class="atom-interact">
        <add-button :kind="p" @click.native="addWidthColored('red')"/>
        <remove-button :kind="p" @click.native="subWidthColored('red')"/>
        <p class="label">Protonen</p>

      </div>
    </div>
  </div>
</template>

<script>
import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";
// import Nucleus from "./Nucleus";

export default {
  name: "AtomBuilder",
  components: {
    // Nucleus,
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
    },

    drawCircle(x,y,r) {
      // clear canvas
      this.vueCanvas.clearCircle(x,y,r)
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.arc(x, y, r, 0, 2 * Math.PI);
      this.vueCanvas.stroke();
    },

    addWidthColored(color) {
      this.rectWidth += 10
      this.vueCanvas.clearRect(0, 0, 400, 200);
      this.vueCanvas.fillStyle = color;
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.fillRect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },

    subWidthColored(color) {
      this.rectWidth -= 10
      this.vueCanvas.clearRect(0, 0, 400, 200);
      this.vueCanvas.fillStyle = color;
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.fillRect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },

    clearCircle(x,y,r) {
      for (var i = 0; i < Math.round(Math.PI * r); i++) {
        var angle = (i / Math.round(Math.PI * r)) * 360;
        this.vueCanvas.clearRect(x, y, Math.sin(angle * (Math.PI / 180)) * r, Math.cos(angle * (Math.PI / 180)) * r);
      }
    },
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