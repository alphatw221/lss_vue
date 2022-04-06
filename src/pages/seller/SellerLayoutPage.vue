<template>
    <v-app>
        <ConsoleNavigationDrawers/>

        <PageBar
            :barName="pageName"
        />

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
import ConsoleNavigationDrawers from '@/components/navigation/ConsoleNavigationDrawers.vue'
import PageBar from '@/components/bar/PageBar.vue'
export default {
    name:"SellerLayoutPage",
    mounted(){
        this.eventBus.on('setAppBarPageName', name=>{
            this.pageName=name
        })
    },
    unmounted(){
        this.eventBus.off('setAppBarPageName')
    },

    data() {
        return {
            pageName:""
        }
        
    },
    components: {
        ConsoleNavigationDrawers,
        PageBar
    },
    methods:{
       
    }
}
</script>

<style>

</style>