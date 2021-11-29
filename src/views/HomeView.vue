<template>
  <div class="home">
        <h1>Welcome to date-picker App</h1>
    <DatePicker/>
  </div>
</template>

<script>
// @ is an alias to /src
import DatePicker from '@/components/DatePicker.vue'

export default {
  name: 'HomeView',
  components: {
    DatePicker
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}
</style>