<template>
<div @click="strikeMe" :class="{'strike-through': this.stroke}">
    {{id}}. {{name}}
</div>
</template>

<script>
export default {
  props: ["id", "name"],
  name: "TaskItem",
  data() {
    return {
        stroke: false
    };
  },

  methods: {
      strikeMe: function() {
          this.stroke = !this.stroke
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.strike-through {
    text-decoration: line-through;
}

div {
    user-select: none;
    cursor: pointer;
}
</style>
