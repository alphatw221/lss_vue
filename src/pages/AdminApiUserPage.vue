<template>
  <v-container>

    <CreateFormDialog
      :dialogName="'Create Account'"
      :requestUrl="'/api/user/create_valid_api_user/'"
      :columns="createColumns"
    />

    <EditFormDialog
      :dialogName="'Edit'"
      :requestUrl="'api/user/'"
      :indexField="'id'"
      :columns="editColumns"
    />

    <v-row no-gutters>
      <v-col cols="12" sm="9">
        <SearchBar 
          :searchColumns="searchColumns"
        ></SearchBar>
      </v-col>

      <v-col cols="12" sm="3">
        <v-btn 
          elevation="3"
          height="3rem"
          @click="showCreateFormDialog()"
          style="margin: 3.5rem 0 0 4rem"
        >Create</v-btn>
      </v-col>
    </v-row>

    <DynamicTable
      :tableName="'User Table'"
      :requestUrl="'/api/user/search_list'"
      :columns="tableColumns"
    ></DynamicTable>

  </v-container>
</template>

<script>
import SearchBar from "@/components/bar/SearchBar.vue";
import EditFormDialog from '@/components/dialog/EditFormDialog.vue';
import CreateFormDialog from '@/components/dialog/CreateFormDialog.vue';
import DynamicTable from "@/components/table/DynamicTable.vue"

export default {
  components: { 
    CreateFormDialog,
    EditFormDialog,
    DynamicTable,
    SearchBar
  },
  data() {
    return {
      searchColumns: [ 'name', 'email', 'status' ],
      createColumns:[
        {key:'name', type:'text', label:'name'},
        {key:'email', type:'text', label:'email'},
      ],
      editColumns:[
        {key:'name', type:'text', label:'name', readonly: false},
        {key:'email', type:'text', label:'email', readonly: false},
      ],
      tableColumns:[
        {key:'id',  name:'id'},
        {key:'name',  name:'name'},
        {key:'email', name:'email'},
        {key:'status', name:'status'},
      ],
    }
  },
  methods: {
    showCreateFormDialog() {
      this.eventBus.emit('showCreateFormDialog');
    }
  }
}
</script>
