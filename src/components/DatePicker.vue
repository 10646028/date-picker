<template>

  <div id="date-picker">
    <h1>Welcome to date-picker App</h1>
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">My Todo Item</label>
  </div>

</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
