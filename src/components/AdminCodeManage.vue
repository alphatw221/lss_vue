<template>
  <dynamicDialog
    :dialogName="'Create Account'"
    :requestUrl="requestUrl"
    :submitUrl="submitUrl"
    :indexField="'id'"
    :columns="columns"
  />
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <SearchBar 
          :search-columns="searchColumns"
          @on-search="toSearch"
          @on-clear="clearSearch">
        </SearchBar>  
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn 
          color="primary"
          elevation="2"
          rounded
          max-height="30"
          @click="createDetail('text')"
        >Create</v-btn>
      </v-col>
    </v-row>
      <br>
    <div id="demo">
      <table class="table" id="myTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in searchUser" :key="user.id" @click="showDetail(user.id)">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-container>
  
</template>

<script>
import SearchBar from "@/components/table/SearchBar.vue";
import { useCookies } from "vue3-cookies";
import axiosClient from "@/libs/axiosClient";
import dynamicDialog from '@/components/dialog/DynamicFormDialog.vue'

export default {
  components: { 
    dynamicDialog,
    SearchBar
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      searchColumns: [
        { value: 'name', label: 'Name' },
        { value: 'email', label: 'Email' },
        { value: 'status', label: 'Status' },
      ],
      userList: [],
      accessToken: '',
      search: '',
      searchOption: '',
      requestUrl: undefined,
      submitUrl: undefined,
      columns:[
        {key:'id', type:'text', label:'id', readonly: false},
        {key:'name', type:'text', label:'name', readonly: false},
        {key:'email', type:'text', label:'email', readonly: false},
        {key:'type', type:'text', label:'type', readonly: false},
        {key:'status', type:'text', label:'status', readonly: false}
      ]
    }
  },
  mounted() {
    this.accessToken = this.cookies.get("access_token");

    axiosClient.get('/api/user/list', { 'headers': { 'Authorization': 'Bearer ' + this.accessToken } })
    .then(response => {
      this.userList = response.data;
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  },
  computed: {
    searchUser() {
    let se = []
    if(this.search !== '') {
      se = this.userList.filter(user => 
        user[this.searchOption].toLowerCase().includes(this.search.toLowerCase())
      )
    } else {
      se = this.userList
    }
    return se
    }
  },
  methods: {
    showDetail(id) {
      this.requestUrl = '/api/user/';
      this.submitUrl = undefined;
      this.eventBus.emit('showDynamicFormDialog', {"id": id});
    },
    createDetail(id) {
      this.submitUrl = '/api/user/create_valid_api_user/';
      this.requestUrl = undefined;
      this.eventBus.emit('showDynamicFormDialog', {"id": id});
    },
    toSearch(searchData) {
      this.search = searchData.keyword;
      this.searchOption = searchData.column;
    },
    clearSearch() {
      this.search = '';
      this.searchOption = '';
    }
  }
}
</script>
