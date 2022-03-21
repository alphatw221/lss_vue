<template>
    <v-app>
        <AdminConsoleNavigationDrawers/>

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
import AdminConsoleNavigationDrawers from '@/components/navigation/AdminConsoleNavigationDrawers.vue'

export default {
    name:"AdminConsolePage",
    data() {
        return {
        }
        
    },
    components: {
        AdminConsoleNavigationDrawers,
    },
    methods:{
       
    }
}
</script>

<style>

</style>