<template>
  <div>
    <SearchBar 
      :search-columns="searchColumns"
      @on-search="toSearch"
      @on-clear="clearSearch">
    </SearchBar>
    <br>
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
</template>

<script>
import SearchBar from "@/components/bar/SearchBar.vue";
import { useCookies } from "vue3-cookies";
import {axiosInstance} from "@/libs/axiosClient";

  export default {
    components: { SearchBar },
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
      };
    },
    mounted() {
      this.accessToken = this.cookies.get("access_token");

      axiosInstance.get('/api/user/list', { 'headers': { 'Authorization': 'Bearer ' + this.accessToken } })
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
      // 有回傳資料再加上參數即可
      toSearch(searchData) {
        this.search = searchData.keyword;
        this.searchOption = searchData.column;
        console.log(searchData);
      },
      clearSearch() {
        this.search = '';
        this.searchOption = '';
        console.log('search cleared');
      }
    }
  }
</script>