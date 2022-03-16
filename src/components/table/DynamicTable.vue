<template>
    <h2> {{ tableName }} </h2>
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
    mounted(){
        this.eventBus.on("searchTable", payload => {
            payload
            this.listItems=[
                {
                    "id":3,
                    "name":"test",
                    "email":"123@email",
                    "type":"asdf",
                    "status":"1123"
                },
                {
                    "id":4,
                    "name":"test",
                    "email":"123@email",
                    "type":"asdf",
                    "status":"1123"
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