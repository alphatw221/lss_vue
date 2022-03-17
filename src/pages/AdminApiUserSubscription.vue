<template>
  <v-container>
    <DynamicDialog
      :dialogName="'Create User Subscription'"
      :requestUrl="''"
      :submitUrl="submitUrl"
      :indexField="'id'"
      :columns="createColumns"
      :type="'create'"
    />
    <v-row no-gutters>
      <v-col cols="12" sm="9">
        <SearchBar 
          :searchColumns="searchColumns"
        />
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn 
          color="primary"
          elevation="3"
          rounded
          height="3rem"
          @click="createDetail('text')"
          style="margin: 3.5rem 0 0 4rem"
        >Create</v-btn>
      </v-col>
    </v-row>
    <DynamicTable
      :tableName="'test table'"
      :requestUrl="'/api/user-subscription/search_list'"
      :columns="tableColumns"
    ></DynamicTable>
  </v-container>
</template>

<script>
import SearchBar from "@/components/bar/SearchBar.vue";
import DynamicDialog from '@/components/dialog/DynamicFormDialog.vue';
import DynamicTable from "@/components/table/DynamicTable.vue";

export default {
  components: { 
    DynamicDialog,
    DynamicTable,
    SearchBar
  },
  data() {
    return {
      searchColumns: [ 'name', 'remark', 'status' ],
      requestUrl: undefined,
      submitUrl: undefined,
      createColumns:[
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
  mounted() {
    
  },
  computed: {
  },
  methods: {
    showDetail(id) {
      this.requestUrl = '/api/user/';
      this.eventBus.emit('showDynamicFormDialog', {"id": id});
    },
    createDetail(id) {
      this.submitUrl = '/api/user-subscription/create_user_subscription/';
      this.eventBus.emit('showDynamicFormDialog', {"id": id});
    }
  }
}
</script>

<style>

</style>