<template>
<div>
  <div class="md-display-1 todo-title">To-Do app with Vue in-memory db</div>
<div class="vue-todo">
  <md-content class="md-primary task-item-container">
  <template v-for="task in tasks">
  <task-item :key="task.id" :id="task.id" :name="task.name"></task-item>
  </template>        
  </md-content>
  <md-field md-inline>
    <label>Enter a task...</label>
    <md-input v-model="taskName" @keydown.enter="addTask"></md-input>
  </md-field>
  <md-button class="md-raised md-primary" @click="addTask">Add a task</md-button>
</div>
<md-button to="/about" class="md-raised md-primary btn-about">About</md-button>
  
</div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  components: {
    "task-item": TaskItem
  },
  name: "VueTodo",
  data() {
    return {
      tasks: [],
      taskName: "",
      taskId: 0
    };
  },

  methods: {
    addTask: function() {
      if (this.taskName === "") return;
      this.taskId++;
      this.tasks.push({ id: this.taskId, name: this.taskName });
      this.taskName = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-todo {
  height: 666px;
  width: 411.6px;
  margin: 0 auto;
  box-shadow: 0 0 0 10px #3341ff, 0 0 0 15px #3341ff5c, 0 0 0 20px #3341ff33;
  border-radius: 1px;
}

.task-item-container {
  text-align: left;
  padding: 10px;
  height: 520px;
  overflow-y: auto;
}

.btn-about {
  margin-top: 50px;
}

.todo-title {
  margin-bottom: 50px;
}
</style>
