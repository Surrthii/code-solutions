<template>
  <div id="app">
    <TaskMain :tasks="tasks" @updatedTasks="updatedTasks"></TaskMain>
  </div>
</template>

<script>
import TaskMain from './components/TaskMain'

export default {
  name: 'App',
  components: {
    TaskMain,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Learn Vue JS',
          completed: true,
        },
        {
          id: 2,
          title: 'Watch netflix',
          completed: true,
        },
        {
          id: 3,
          title: 'Go shopping',
          completed: false,
        },
        {
          id: 4,
          title: 'Learn guitar',
          completed: false,
        },
        {
          id: 5,
          title: 'Send email',
          completed: false,
        },
      ],
    }
  },
  methods: {
    updatedTasks(arg) {
      this.tasks = arg
    },
  },
}
</script>
