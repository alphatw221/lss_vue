<template>
    <v-table height="500">
        <thead>
            <tr>
                <th v-for="column in columns" v-bind:key="column.key" style="font-size:1.2rem;">
                    {{column.name}}
                </th>
            </tr>
        </thead>
        <tbody v-for="item in listItems" :key="item.id">
            <tr @click="showItem=item.id">
                <td v-for="column in columns" :key="column.key" style="font-size:1.1rem;">
                    {{ column.is_field ?? item[column.key] }}
                </td>
            </tr>
            <tr v-if="item.id == showItem">
                <td>Email:</td>
                <td>{{ item.users[0].email }}</td>
            </tr>
            <tr v-if="item.id == showItem">
                <td>Page:</td>
                <td v-for="fb in item.facebook_pages" :key="fb"> 
                    <tr> {{ fb.name }} </tr>
                    <tr>
                        <v-avatar
                            class="ma-3"
                            size="35"
                        >
                            <v-img :src="fb.image"></v-img>
                        </v-avatar>                        
                    </tr>
                </td>
                
            </tr>
            <tr v-if="item.id == showItem">aa</tr>
            
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
        columns: Array,
    },
    data(){
        return{
            currentPage: 1,
            totalPage: 1,
            pageSize: 10,
            searchColumn: undefined,
            keyword: undefined,
            listItems: [],
            showItem: undefined
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