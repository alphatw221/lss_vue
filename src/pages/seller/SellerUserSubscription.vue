<template>
    <v-app>
        <PageBar
            :barName="'User Subscriptions'"
        />
        <!-- <v-divider></v-divider> -->
        <v-main>
            <SearchBar 
                :searchColumns="searchColumns"
            />
            <v-divider></v-divider>
            <SubTable
                :tableName="'User Subscription Table'"
                :requestUrl="'/api/user-subscription/dealer_search_list'"
                :columns="tableColumns"
            />
            <!-- <v-table height="500">
                <thead>
                    <tr>
                        <th v-for="column in tableColumns" :key="column.key" style="font-size:1rem;">
                            {{column.name}}
                        </th>
                    </tr>
                </thead>
                <tbody v-for="item in listItems" :key="item.id">
                    <tr @click="showItem=item.id">
                        <td v-for="column in tableColumns" :key="column.key" style="font-size:1rem;">
                            {{ column.is_field ?? item[column.key] }}
                        </td>
                        
                    </tr>
<<<<<<< HEAD
                    <tr v-if="item.id == showItem">
                        <v-row v-for="column in expandtableColumns" :key="column.key">
                            <v-col>
                                {{column.name}}
                            </v-col>
                            <v-col>
                                {{item[column.key]}}
                            </v-col>
                            <v-divider></v-divider>
                        </v-row>
                    </tr>
=======
                    <tr v-if="item.id == showItem">aa</tr>
                    <tr v-if="item.id == showItem">aa</tr>
                    <tr v-if="item.id == showItem">aa</tr>
>>>>>>> 13d4ebace5a720c61183338deb4ff9336813025c
                </tbody>
            </v-table> -->
        </v-main>
    </v-app>
</template>
<script>
import PageBar from '@/components/bar/PageBar.vue';
import SearchBar from '@/components/bar/SearchBar.vue';
import SubTable from '@/components/table/SubscriptionTable.vue';

export default {
    components: {  
        PageBar,
        SearchBar,
        SubTable
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
            expandtableColumns:[
                {key:'recentCampaigns',name:'RecentCampaigns'},
            ],
            listItems: [
                {'id': '1', 'country': 'Malaysia', 'plan': 'Trial', 'trial_period': '1 Month', 'contract_period': '20220203', 'company': 'OSC', 'std': '12000', 'person': 'Pooop', 'phone': '0000000','recentCampaigns':'8'},
                {'id': '2', 'country': 'US', 'plan': 'Trial', 'trial_period': '3 Month', 'contract_period': '20220220', 'company': 'OSC', 'std': '2000', 'person': 'Pooop', 'phone': '0000000','recentCampaigns':'6'},
                {'id': '3', 'country': 'Australia', 'plan': 'Trial', 'trial_period': '2 Month', 'contract_period': '20220215', 'company': 'OSC', 'std': '1200', 'person': 'Pooop', 'phone': '0000000','recentCampaigns':'4'},
                {'id': '4', 'country': 'US', 'plan': 'Trial', 'trial_period': '3 Month', 'contract_period': '20220211', 'company': 'OSC', 'std': '12050', 'person': 'Pooop', 'phone': '0000000','recentCampaigns':'7'},
                {'id': '5', 'country': 'US', 'plan': 'Trial', 'trial_period': '4 Month', 'contract_period': '20220202', 'company': 'OSC', 'std': '12500', 'person': 'Pooop', 'phone': '0000000','recentCampaigns':'5'}
            ],
            showItem: null
        }
    },   
    methods: {
        showInfo() {
            this.info_show = ! this.info_show
        }
    }, 
}
</script>
<style scoped>

</style>