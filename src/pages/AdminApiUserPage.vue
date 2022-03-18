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

    
    <SearchBar 
      :searchColumns="searchColumns"
    ></SearchBar>

    <div class="create_button" >
      <v-btn 
        height="3rem"
        @click="showCreateFormDialog()"
      >Create</v-btn>
    </div>
    
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

<style >
.create_button {
  width: fit-content;
  margin-left: auto;
  margin-right: 30px;
}
</style>