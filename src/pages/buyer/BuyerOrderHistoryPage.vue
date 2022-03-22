
<template>
  <v-container>

    <DynamicTable
      :tableName="'Order History'"
      :requestUrl="'/api/order/buyer_list'"
      :columns="tableColumns"
    ></DynamicTable>

  </v-container>
</template>

<script>
import DynamicTable from "@/components/table/DynamicTable.vue"

export default {
  components: { 
    DynamicTable,
  },
  data() {
    return {
      tableColumns:[
        {key:'id',  name:'id'},
        {key:'platform',  name:'platform'},
        {key:'subtotal',  name:'subtotal'},
        {key:'shipping_cost', name:'shipping_cost'},
        {key:'total',  name:'total'},
        {key:'status', name:'status'}
      ],
    }
  },
  methods: {
  }
}
</script>

<style>
</style>