<template>
  <div class="test_page2">
    <h1>{{ msg }}</h1>

    <h1>Test Page 3</h1>
  </div>
</template>

<script>
export default {
  name: 'TestPage3',
  props: {     //TestComponent properties here
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>