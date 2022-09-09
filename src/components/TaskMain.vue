<template>
  <div style="padding-left: 400px; padding-top: 40px;">
    <textarea v-model="newTask"></textarea>
    <div style="padding-top: 20px;">
      <button @click="addNewTask">
        Add New Task
      </button>
    </div>
    <p>TODO LIST HERE</p>

    <TaskItem :tasks="tasks" @newestTask="newestTask"></TaskItem>
    <div style="padding-top: 20px;">
      <button @click="deleteCompleted">Delete Completed</button>
    </div>
  </div>
</template>
<script>
import TaskItem from './TaskItem.vue'
export default {
  name: 'TaskMain',
  components: { TaskItem },
  props: ['tasks'],
  data() {
    return {
      newTask: '',
      dummyTask: [],
    }
  },
  methods: {
    addNewTask() {
      let { newTask, tasks, dummyTask } = this
      dummyTask = tasks
      dummyTask.push({
        title: newTask,
        completed: false,
      })
      this.Semit('updatedTasks', dummyTask)
      dummyTask = []
      newTask = ''
    },
    deleteCompleted() {
      let { tasks, dummyTask } = this
      dummyTask = tasks
      dummyTask.forEach((task, index) => {
        if (task.completed) {
          dummyTask.splice(index, 1)
        }
      })
      this.Semit('updatedTasks', dummyTask)
    },
    newestTask(arg) {
      this.Semit('updatedTasks', arg)
    },
  },
}
</script>
<style></style>
