<template>
<v-container>
<v-card >

    <v-table height="500">
        <thead>
        <tr>
            <th v-for="column in columns" v-bind:key="column.key">
                {{column.name}}
            </th>
            <th>
                Edit
            </th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in listItems" v-bind:key="item.id">
                <td v-for="column in columns" v-bind:key="column.key" >
                    {{column.is_field??item[column.key]}}
                </td>
                <td>
                    <v-btn 
                        elevation="3"
                        height="1.5rem"
                        @click="showEditFormDialog(item.id)"
                    >Edit</v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>


    <div class="text-center">
        <v-pagination
            v-model="currentPage"
            v-bind:length="totalPage"
        ></v-pagination>
    </div>

</v-card>
</v-container>
</template>

<script>
import { axiosInstanceWithBearer } from '@/libs/axiosClient'

export default {
    props:{
        tableName: String,
        requestUrl: String,
        columns: Array,
    },
    data(){
        return{
            currentPage: 1,
            totalPage: 1,
            pageSize: 10,
            searchColumn: undefined,
            keyword: undefined,
            listItems: []
        }
    },
    watch:{
        currentPage(){
            this.search()
        }
    },
    mounted(){
        this.search();
        
        this.eventBus.on("searchTable", (payload) => {
            this.currentPage = 1
            this.searchColumn = payload.searchColumn
            this.keyword = payload.keyword
            this.pageSize = payload.pageSize
            this.search()
            
        });
        
    },
    unmounted(){
        this.eventBus.off("searchTable");
    },
    methods:{
        search(){
            axiosInstanceWithBearer
            .get(this.requestUrl + `?page_size=${this.pageSize}&page=${this.currentPage}&search_column=${this.searchColumn}&keyword=${this.keyword}`)
            .then(
                response=>{
                    console.log(response)
                    if(response.data.count!=undefined){
                        const totalPage = parseInt(response.data.count / this.pageSize)
                        this.totalPage = totalPage == 0 ? 1 : totalPage
                    }
                    
                    this.listItems = response.data.results
                }
            ).catch(
                error=>{
                    console.log(error)
                }
            )
        },
        showEditFormDialog(item_id) {
            this.eventBus.emit('showEditFormDialog',{id:item_id})
        }
    }
}
</script>

<style>
th, td {
   font-size: 2rem; 
}

</style>