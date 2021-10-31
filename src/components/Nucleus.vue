<template>
  <div class="atom-interact">
    <add-button :kind="nuc"/>
    <remove-button :kind="nuc" @click.native="drawCircle(xPos, yPos, radius)"/>

    <p class="label">Nucleus</p>
  </div>

</template>

<script>
import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";

export default {
  name: "Nucleus",
  components: {
    AddButton,
    RemoveButton
  },
  props: {
    xPos: Number,
    yPos: Number,
    radius: Number,
  },
  methods: {

    drawCircle(x,y,r) {
      // clear canvas
      this.vueCanvas.clearCircle(x,y,r)
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.arc(x, y, r);
      this.vueCanvas.stroke();
    },
    clearCircle(x,y,r) {
      for( var i = 0 ; i < Math.round( Math.PI * r ) ; i++ ){
        var angle = ( i / Math.round( Math.PI * r )) * 360;
        this.vueCanvas.clearRect( x , y , Math.sin( angle * ( Math.PI / 180 )) * r , Math.cos( angle * ( Math.PI / 180 )) * r );
      }
    }
  }
}
</script>

<style scoped>
.atom-interact {
  padding: 5px;
}

.label {
  font-size: 6px;
}

.atom-builder-buttons {
  /*background-color: blue;*/
  width: 30%;
  display: flex;
  justify-content: space-between;
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
</style>