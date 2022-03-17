<template>
  <div>
    <DynamicTable
      :tableName="'test table'"
      :requestUrl="'/api/user/search_list'"
      :columns="tableColumns"
    />
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import DynamicTable from "@/components/table/DynamicTable.vue"

  export default {
    components: { DynamicTable },
    setup() {
      const { cookies } = useCookies();
      return { cookies };
    },
    data() {
      return {
        tableColumns:[
          {key:'id',  name:'id'},
          {key:'name',  name:'name'},
          {key:'email', name:'email'},
          {key:'status', name:'status'}
        ],
        userList: [],
        accessToken: '',
      };
    },
    mounted() {
      this.accessToken = this.cookies.get("access_token");
      this.eventBus.emit("searchTable", {searchColumn: 'name', keyword: 'test', pageSize: 10, page: 1})

      // axiosInstance.get('/api/user/list', { 'headers': { 'Authorization': 'Bearer ' + this.accessToken } })
      // .then(response => {
      //   this.userList = response.data;
      //   console.log(response.data);
      // }).catch((error) => {
      //   console.log(error);
      // })
    },
    computed: {
    },
    methods: {
    }
  }
</script>