<template>
    <v-app>
        <MobileNavigationDrawers/>

        <!-- <v-app-bar app>
        </v-app-bar> -->

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

            <!-- If using vue-router -->
            <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
import MobileNavigationDrawers from '@/components/navigation/MobileNavigationDrawers.vue'

export default {
    name:"BuyerLayoutPage",
    data() {
        return {
        }
        
    },
    components: {
        MobileNavigationDrawers,
    },
    methods:{
       
    }
}
</script>

<style>

</style>