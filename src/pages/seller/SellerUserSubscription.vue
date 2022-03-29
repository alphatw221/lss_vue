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
                    <tr v-if="item.id == showItem">aa</tr>
                    <tr v-if="item.id == showItem">aa</tr>
                    <tr v-if="item.id == showItem">aa</tr>
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
            listItems: [
                {'id': '1', 'country': 'Malaysia', 'plan': 'Trial', 'trial_period': '1 Month', 'contract_period': '20220203', 'company': 'OSC', 'std': '12000', 'person': 'Pooop', 'phone': '0000000'},
                {'id': '2', 'country': 'Malaysia', 'plan': 'Trial', 'trial_period': '1 Month', 'contract_period': '20220203', 'company': 'OSC', 'std': '12000', 'person': 'Pooop', 'phone': '0000000'}
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