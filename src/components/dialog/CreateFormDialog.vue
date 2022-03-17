<template>
    <v-app>
        <v-main>
            <v-dialog
                v-model="show"
                persistent
            >

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

          <v-btn
            color="blue-darken-1"
            text
            @click="show = false"
          >
            Close
          </v-btn>

          <v-btn
            color="blue-darken-1"
            text
            @click="submit"
          >
            Submit
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-dialog>
        </v-main>
    </v-app>
  
</template>

<script>
import { axiosInstanceWithBearer } from "@/libs/axiosClient";

export default {
    props:['dialogName', 'requestUrl', 'columns'],
    data(){
        return{
            show: false,
            detailData:{},
        }
    },
    mounted(){
        this.eventBus.on("showCreateFormDialog", () => {
            this.show = true
        });
    },
    unmounted(){
        this.eventBus.off("showCreateFormDialog");
    },
    methods:{
        submit() {
            axiosInstanceWithBearer.post(this.requestUrl, this.detailData).then(response => {
                    console.log(response);
                    alert('create successful');
                }).catch((error) => {
                    console.log(error);
                })
                this.show = false;
        },
    }

}


</script>

<style>

</style>

