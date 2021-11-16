<template>
  <div class="home">
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
