<template>
    <v-table height="500">
        <thead>
            <tr>
                <th v-for="column in tableColumns" v-bind:key="column.key" style="font-size:1.2rem;">
                    {{column.name}}
                </th>
            </tr>
        </thead>
        <tbody v-for="item in listItems" :key="item.id">
            <tr @click="showItem=item.id">
                <td v-for="column in tableColumns" :key="column.key" style="font-size:1.1rem;">
                    {{ column.is_field ?? item[column.key] }}
                </td>
            </tr>

            <v-container v-if="item.id == showItem">

                <tr  v-for="row,index in collapseRows" :key="index">
                        <div v-if="row.type=='array'">
                            <td>{{row.name}}</td>
                            <td v-for="object,object_index in item[row.key]" :key="object_index">
                                <div v-for="column,column_index in row.columns" :key="column_index">
                                    <v-avatar v-if="column.type=='avatar'">

                                        <div v-if="column.key2!=undefined">
                                            <img :src="object[column.key][column.key2]" alt="">
                                        </div>

                                        <div v-else>
                                            <img :src="object[column.key]" alt="">
                                        </div>

                                    </v-avatar>

                                    <image v-if="column.type=='image'" :src="field[column.key]"/>

                                    <div v-if="column.type=='text'">
                                        <span>{{column.name}}</span>
                                        <span>{{object[column.key]}}</span>
                                    </div>

                                </div>
                                
                            </td>
                        </div>


                        <td v-if="row.type=='text'">
                            <span>{{row.name}}</span>
                            <span>{{item[row.key]}}</span>
                        </td>

                        <td v-if="row.type=='image'">
                            <image :src="item[row.key]"/>
                        </td>

                    </tr>

            </v-container>
            
            
        </tbody>
    </v-table>
    <div class="text-center">
        <v-pagination
            v-model="currentPage"
            v-bind:length="totalPage"
        ></v-pagination>
    </div>
</template>

<script>
import { axiosInstanceWithBearer } from '@/libs/axiosClient'

export default {
    props:{
        tableName: String,
        requestUrl: String,
        tableColumns: Array,
        collapseRows: Array

    },
    data(){
        return{
            jp :require('jsonpath'),
            currentPage: 1,
            totalPage: 1,
            pageSize: 10,
            searchColumn: undefined,
            keyword: undefined,
            listItems: [],
            showItem: undefined,

            

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
                    if (response.data.count!=undefined) {
                        const totalPage = parseInt(response.data.count / this.pageSize)
                        this.totalPage = totalPage == 0 ? 1 : totalPage
                    }
                    
                    this.listItems = response.data.results
                    console.log(this.listItems)
                }
            ).catch(
                error=>{
                    console.log(error)
                }
            )
        }
    }
}
</script>

<style>
th, td {
   font-size: 2rem; 
}

</style>