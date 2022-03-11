<template>
  <router-view></router-view>
    <!-- <v-app>
        <AdminConsoleNavigationDrawers/>
        <v-app-bar app>
        </v-app-bar>

        <v-main>

            <v-container fluid>

            <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
        </v-footer>
    </v-app> -->
</template>

<script>

// import AdminConsoleNavigationDrawers from './components/AdminConsoleNavigationDrawers.vue'

export default {
  name: 'TestApp',
  components: {
    // AdminConsoleNavigationDrawers
  },
  computed:{

  },
  data: () => ({
    //
  }),
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