<template>
<v-container>


<v-card>


    <v-table fixed-header height="300px">
        <thead>
        <tr >
            <th v-for="column in columns" v-bind:key="column.key">
                {{column.name}}
            </th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in listItems" v-bind:key="item.id">
                <td v-for="column in columns" v-bind:key="column.key">
                    {{item[column.key]}}
                </td>
            </tr>
        </tbody>
    </v-table>

    <!-- <h2> {{ tableName }} </h2>
    <table>
        <thead>
            <tr >
                <th v-for="column in columns" v-bind:key="column.key">
                    {{column.name}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in listItems" v-bind:key="item.id">
                <td v-for="column in columns" v-bind:key="column.key">
                    {{item[column.key]}}
                </td>
            </tr>
        </tbody>
    </table> -->

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
        tableName:String,
        requestUrl:String,
        columns:Array
    },
    data(){
        return{
            currentPage:1,
            totalPage:1,
            pageSize:20,

            listItems:[
                {
                    "id":1,
                    "name":"test",
                    "email":"123@email",
                    "type":"asdf",
                    "status":"1123"
                },
                {
                    "id":2,
                    "name":"test",
                    "email":"123@email",
                    "type":"asdf",
                    "status":"1123"
                },
            ],
        }
    },
    watch:{
        currentPage(){
            this.search()
        }
    },
    computed:{
        // totalPage(){

        // }
    },
    mounted(){
        this.eventBus.on("searchTable", (searchColumn,keyword,pageSize) => {
            this.currentPage=1
            this.searchColumn=searchColumn
            this.keyword=keyword
            this.pageSize=pageSize
            this.search()
            // this.listItems=[
            //     {
            //         "id":3,
            //         "name":"test",
            //         "email":"123@email",
            //         "type":"asdf",
            //         "status":"1123"
            //     },
            //     {
            //         "id":4,
            //         "name":"test",
            //         "email":"123@email",
            //         "type":"asdf",
            //         "status":"1123"
            //     },
            // ]
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
                    this.totalPage=response.data.count/this.pageSize
                    this.listItems=response.data.results
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

</style>