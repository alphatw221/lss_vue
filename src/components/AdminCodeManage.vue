<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <div class="search-wrapper panel-heading col-sm-12">
          <input type="text" v-model="search" placeholder="Search" />
        </div>  
      </v-col>
      <v-col cols="12" sm="4">
        <div></div>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn 
          color="primary"
          elevation="2"
          rounded
          max-height="30">Create</v-btn>
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
            <tr v-for="user in searchUser" :key="user.id">
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
import { useCookies } from "vue3-cookies";
import axiosClient from "@/libs/axiosClient";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
        search: '',
        accessToken: '',
        userList: []
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
      se = this.userList.filter(u => 
        u.name.toLowerCase().includes(this.search.toLowerCase()) ||
        u.email.toLowerCase().includes(this.search.toLowerCase()) ||
        u.status.toLowerCase().includes(this.search.toLowerCase())
      )
     } else {
      se = this.userList
     }
     return se
    }
  }
}
</script>
