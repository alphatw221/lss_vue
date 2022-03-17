<template>
    <v-dialog v-model="show" persistent>

      <v-card>

        <v-card-title>
          <span class="text-h5" >{{dialogName}}</span>
        </v-card-title>

        <v-card-text>

            <div v-for="column in columns" v-bind:key="column.key">

                <input v-if="(column.type == 'text')" 
                    :label="column.label" 
                    :placeholder="column.label"
                    :readonly="(column.readonly == true) ? true : false"
                    v-model="detailData[column.key]"/>

                <!-- <input 
                    v-if="column.type == 'multiple_selector'"
                    :label="column.label"
                    :url="column.url" 
                    :relation="column.relation"
                    :relationUrl="column.relationUrl"
                    :trackBy="column.trackBy"/>

                <input
                    v-if="column.type == 'single_selector'"
                    :label="column.label"
                    :relationUrl="column.relationUrl"
                    :column="column.key"
                    :trackBy="column.trackBy"
                    v-on:updateDataColumn="updateDataColumn"
                    :value="detailData[column.key]"/> -->
            
                <!-- <input
                    v-if="column.type == 'text_editor'"
                    :label="column.label"
                    :slug="slug"
                    :uploadUrl="column.uploadUrl"
                    :text="detailData[column.key]"
                    :column="column.key"
                    v-on:updateDataColumn="updateDataColumn"/> -->

                <!-- <input 
                    v-if="column.type == 'image_input'"
                    :label="column.label"
                    :slug="slug"
                    :addImageUrl="column.addImageUrl"
                    :url="column.url"/> -->


                <!-- <div v-if="column.type == 'plain_text'">
                    <label>{{column.label}}</label>
                    <textarea rows="10"  class="form-control" readonly="false" v-html="detailData[column.key]"></textarea>
                </div> -->


            </div>
            
        </v-card-text>

        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn color="blue-darken-1" text @click="show = false">
            Close
          </v-btn>

          <v-btn color="blue-darken-1"  text @click="submit">
            Submit
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-dialog>
</template>

<script>
import { axiosInstanceWithBearer } from "@/libs/axiosClient";

export default {
    props:['dialogName', 'requestUrl', 'indexField', 'columns'],
    data(){
        return{
            show: false,
            detailData:{},
        }
    },
    mounted(){
        this.eventBus.on("showEditFormDialog", item => {
            this.dataIndex = item[this.indexField]
            this.getDetailData()
        });
        
    },
    unmounted(){
        this.eventBus.off("showEditFormDialog");
    },
    methods:{
        getDetailData(){
            axiosInstanceWithBearer.get(this.requestUrl + this.dataIndex)
            .then(res => {
                this.show = true;
                this.detailData = res.data;
                console.log(this.detailData)
            })
            .catch(error => {
                console.log(error)
            })
        },
        submit() {
            axiosInstanceWithBearer.put(this.requestUrl + this.dataIndex + '/', this.detailData).then(response => {
                console.log(response);
                alert('update successful');
                this.show = false
            }).catch((error) => {
                console.log(error);
            })
            
        }
    }

}
</script>

<style>

</style>

