<template>
    <v-app>
        <PageBar
            :barName="'User Subscriptions'"
        />
        <v-main>
            <SearchBar 
                :searchColumns="searchColumns"
            />
            <v-divider></v-divider>
            <CollapseTable
                :tableName="'User Subscription Table'"
                :requestUrl="'/api/user-subscription/dealer_search_list'"
                :tableColumns="tableColumns"
                :collapseRows="collapseRows"
            />
        </v-main>
    </v-app>
</template>
<script>
import PageBar from '@/components/bar/PageBar.vue';
import SearchBar from '@/components/bar/SearchBar.vue';
import CollapseTable from '@/components/table/CollapseTable.vue';

export default {
    components: {
        PageBar,
        SearchBar,
        CollapseTable
   },
    data() {
        return {
            
            count: 0,
            searchColumns: [ 'Country', 'Plan', 'Person' ],
            tableColumns:[
                {key:'id',  name:'ID'},
                {key:'country', name:'Country'},
                {key:'type', name:'Plan'},
                {key:'trial_period', name:'Trial Period'},
                {key:'expired_at', name:'Contract Period'},
                {key:'name', name:'Company Brand'},
                {key:'std', name:'Sales Till Dates(STD)'},
                {key:'person', name:'Person in Charge'},
                {key:'phone', name:'Phone'},
            ],
            collapseRows:[
                {key:'users', name:'Facebook Users:', type:'array', columns:[{key:'facebook_info', key2:'picture',name:null, type:'avatar'}]},
                {key:'users', name:'Google Users:', type:'array', columns:[{key:'google_info', key2:'picture',name:null, type:'avatar'}]},
                {key:'facebook_pages', name:'Facebook Pages:', type:'array', columns:[{key:'image', name:null, type:'avatar'}]},
                {key:'instagram_profiles', name:'Instagram Profiles:', type:'array', columns:[{key:'image', name:null, type:'avatar'}]},
                {key:'youtube_channels', name:'Youtube Channels:', type:'array', columns:[{key:'image', name:null, type:'avatar'}]},
            ]
        }
    },   
    methods: {
    }, 
}
</script>
<style scoped>

</style>