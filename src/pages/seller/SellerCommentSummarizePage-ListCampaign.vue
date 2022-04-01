<template>
  <v-container>
      

      <SearchBar 
        :searchColumns="searchColumns"
        ></SearchBar>

      <DynamicTable
        :tableName="'Campaign Table'"
        :requestUrl="'/api/campaign/search_list'"
        :columns="tableColumns"
    ></DynamicTable>


  </v-container>
</template>

<script>

// import {campaign_comment_summarize} from '@/api/campaign_comment'

import SearchBar from "@/components/bar/SearchBar.vue";
import DynamicTable from "@/components/table/DynamicTable.vue"

export default {
    name:"SellerCommentSummarizePage",
    components: { 
        DynamicTable,
        SearchBar
    },

    data() {
        return {
            tableColumns:[
                {key:'id',  name:'ID'},
                {key:'title',  name:'Title'},
                {key:'description', name:'Description'},
                {key:'status', name:'Status'},
                {key:'start_at', name:'Start At'},
                {key:'end_at', name:'End At'}
            ],
            searchColumns: [ 'id','title',],
            // campaign_id:361,
            // comment_categories:[],

        }
    },
    mounted(){
    },
    methods:{
    }
}
</script>

<style>

</style>