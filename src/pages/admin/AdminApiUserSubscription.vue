<template>
  <v-container>
    <CreateFormDialog
      :dialogName="'Create User Subscription'"
      :requestUrl="'/api/user-subscription/'"
      :columns="createColumns"
    />

    <EditFormDialog
      :dialogName="'Edit User Subscription'"
      :requestUrl="'/api/user-subscription/'"
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
      :tableName="'User Subscription Table'"
      :requestUrl="'/api/user-subscription/dealer_search_list'"
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
      searchColumns: [ 'name', 'remark', 'status' ],
      requestUrl: undefined,
      submitUrl: undefined,
      createColumns:[
        {key:'name', type:'text', label:'name'},
        {key:'description', type:'text', label:'description'},
        {key:'remark', type:'text', label:'remark'},
        {key:'status', type:'text', label:'status'},
      ],
      editColumns:[
        {key:'name', type:'text', label:'name', readonly: false},
        {key:'description', type:'text', label:'description', readonly: false},
        {key:'remark', type:'text', label:'remark', readonly: false},
        {key:'status', type:'text', label:'status', readonly: false},
      ],
      tableColumns:[
        {key:'id',  name:'id'},
        {key:'name',  name:'name'},
        {key:'remark', name:'remark'},
        {key:'status', name:'status'}
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

<style>
.create_button {
  width: fit-content;
  margin-left: auto;
  margin-right: 30px;
}
</style>