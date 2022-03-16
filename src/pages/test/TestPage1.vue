<template>
  <div class="test_page1">
    <h1>{{ msg }}</h1>

    <h1>Test Page 1</h1>

    <DynamicFormDialog
      :dialogName="'testDialog'"
      :requestUrl="'/api/user/'"
      :indexField="'id'"
      :columns="columns"
    />

    <button @click="test">Test</button>

    <FacebookLoginButton :busName="'lssLogin'"/>


    <DynamicTable :tableName="'testTable'" :columns="tableColumns" :requestUrl="''"/>
  </div>
</template>

<script>

import DynamicFormDialog from '@/components/dialog/DynamicFormDialog.vue'
import DynamicTable from '@/components/table/DynamicTable.vue'
import FacebookLoginButton from '@/components/button/FacebookLoginButton.vue'

export default {
  name: 'TestPage1',
  mounted(){
      this.eventBus.on("lssLogin", payload => {
          console.log('in bus')
          console.log(payload.token)
          
      });
  },
  unmounted(){
      this.eventBus.off("lssLogin");
  },
  components: {
    DynamicFormDialog,
    DynamicTable,
    FacebookLoginButton,
  },
  props: {     //TestComponent properties here
    msg: String
  },
  data(){
    return{
      columns:[
        {key:'id', type:'text', label:'id', readonly:true},
        {key:'name', type:'text', label:'name', readonly:true},
        {key:'email', type:'text', label:'email', readonly:true},
        {key:'type', type:'text', label:'type', readonly:true},
        {key:'status', type:'text', label:'status', readonly:true}
      ],
      tableColumns:[
        {key:'id',  name:'id'},
        {key:'name',  name:'name'},
        {key:'email', name:'email'},
        {key:'type', name:'type'},
        {key:'status', name:'status'}
      ]
    }
  },
  methods:{
    test(){
      console.log(process.env)
      // this.eventBus.emit("showDynamicFormDialog",{'id':1})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>