<template>
  <table>
        <thead>
                <tr >
                    <th v-for="column in columns" v-bind:key="column.key"></th>
                </tr>
        </thead>
        <tbody v-for="item in listItems" v-bind:key="item.id" >
            <tr v-for="column in columns" v-bind:key="column.key">
                <td v-html="item[column.key]">
                </td>
            </tr>
        </tbody>
</table>

</template>

<script>
// import { axiosInstance } from '@/libs/axiosClient'

export default {
    props:{
        tableName:String,
        requestUrl:String,
        columns:Array
    },
    data(){
        return{
            listItems:[
                {
                    "id":1,
                    "name":"test"
                },
                {
                    "id":2,
                    "name":"test2"
                },
            ],
        }
    },
    mounted(){
        this.eventBus.on("searchTable", payload => {
            this.listItems=[
                {
                    "id":3,
                    "name":"test3"
                },
                {
                    "id":4,
                    "name":"test4"
                },
            ]
        });
        
    },
    unmounted(){
        this.eventBus.off("searchTable");
    },
    methods:{

    }
}
</script>

<style>

</style>