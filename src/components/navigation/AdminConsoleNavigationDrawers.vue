<template>
  <!-- <v-card
    class="mx-auto"
    height="400"
    width="256"
  > -->
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >

      <!-- <v-list color="transparent">
          <v-list-item prepend-icon="mdi-view-dashboard" title=" LSS Admin Console"></v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>
         -->

      <v-list>

        <v-list-item>
          <v-row >
            <img v-bind:src="lss_icon" alt="" width="60" height="20"/>
            
            <h6>LSS Admin Console</h6>
          </v-row>
        </v-list-item>

        <!-- <v-devider ></v-devider>
        <v-devider></v-devider> -->

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <!-- <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title> -->

          <!-- <v-list-item-icon> -->
            <v-icon>{{ item.icon }}</v-icon>
          <!-- </v-list-item-icon> -->

          <!-- <v-list-item-content> -->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          <!-- </v-list-item-content> -->
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>


export default {
  name: 'AdminConsoleNavigationDrawers',
  components: {
    
  },
  computed:{

  },
  data: () => ({
    items: [
          { title: 'User', icon: 'mdi-account-box' ,route: '/admin_console/user'},
          { title: 'User Subscription', icon: 'mdi-view-dashboard' ,route: '/admin_console/user_subscription'},
          { title: 'Dashboard', icon: 'mdi-gavel' ,route: '/admin_console/hello_world'},
        ],
    lss_icon:require("@/assets/lss-logo/logo_wh.png")
  }),
  methods:{
  }
}
</script>

<style >
.v-navigation-drawer  {
  background-color: dimgrey;
}
.v-list{
  background-color: dimgrey;
}
.v-list .v-list-item{
  background-color: dimgrey;
}

</style>