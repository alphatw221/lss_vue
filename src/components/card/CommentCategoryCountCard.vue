<template>
    <v-card>
        <v-card-title>
            {{title}}
        </v-card-title>


        <v-card-content>
            {{number}}/{{total}}
        </v-card-content>

    </v-card>
</template>
<script>
export default {
    props: {
        title:String,
        number:Number,
        total:Number
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>


</style>