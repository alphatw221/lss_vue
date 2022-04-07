<template>
<select :value="value" @input="handleInput">
      <option v-for="item,index in items" :key="index" :value="item[itemValue]">{{item[itemText]}}</option>
</select>
  
</template>

<script>
export default {
    props:{
        value:String,
        items:Array,
        itemText:String,
        itemValue:String
    },
    data(){
        return{
            content:this.value
        }
    },
    methods:{
        handleInput () {
            this.eventBus.emit('input', this.content)
        }
    }
}
</script>

<style>

select{
    width: 100%;
}
</style>