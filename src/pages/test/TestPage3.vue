<template>
    <v-app>
        <BuyerNavigationDrawers/>
    </v-app>
</template>

<script>
import BuyerNavigationDrawers from '@/components/navigation/BuyerNavigationDrawers.vue'

export default {
  name: 'TestPage3',
  component: { BuyerNavigationDrawers },
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