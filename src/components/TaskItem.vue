<template>
  <div>
    <div v-for="(task, index) in tasks" :key="task">
      {{ `${task.title}      ` }}
      <button @click="deleteTask(index)">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskItem',
  props: ['tasks'],
  data() {
    return {
      removeTask: [],
    }
  },
  methods: {
    deleteTask(index) {
      let { removeTask, tasks } = this
      removeTask = tasks
      removeTask.splice(index, 1)
      this.$emit('newestTask', removeTask)
    },
  },
}
</script>
<style></style>
