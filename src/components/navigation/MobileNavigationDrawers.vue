<template>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
        <v-avatar v-for="(image,index) in buyerProfileImages" v-bind:key="index">
            <img :src="image" alt="no image">
        </v-avatar>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
      >
      <v-list>

      
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          
            <v-icon>{{ item.icon }}</v-icon>


            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
</template>


<script>
import {get_buyer_profile_images} from '@/api/user'

  export default {
    data: () => ({
      buyerProfileImages:[],
      drawer: false,
      group: null,
      items: [
          { title: 'Order History', icon: 'mdi-gavel' ,route: '/buyer/order_history'},
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    mounted(){
      get_buyer_profile_images().then(res=>{
        this.buyerProfileImages=res.data
      }).catch(error=>{
        alert(error)
      })
    }
  }

</script>

<style>

</style>