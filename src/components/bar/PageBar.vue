<template>
    <v-app-bar 
         density="compact" 
         prominent
         style="background: #c7ccdb;"
      >
         <v-app-bar-title style="font-weight: 500;font-size: 1.5rem">{{ barName }}</v-app-bar-title>

         <template v-slot:append>
            <v-avatar
                  class="ma-3"
                  size="35"
                  left
            >
               <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
            </v-avatar>
         </template>
      </v-app-bar>
</template>
<script>
export default {
    props: {
        barName: String,
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>

</style>