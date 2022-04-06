<template>
    <v-card
    class="mx-2 my-2"
    max-width="344"
    min-width="200"
    variant="outlined"
    >
        <v-card-title>
            {{title}}
        </v-card-title>

        <v-card-subtitle>
            {{number}}/{{total}}
        </v-card-subtitle>
        
        <v-card-actions>
            <v-btn
                variant="outlined"
                rounded
                text
                :to="`/seller/comment_summarize/campaign/${campaignId}/category/${title}`"
            >
                View 123
            </v-btn>
        </v-card-actions>

    </v-card>
</template>
<script>
export default {
    props: {
        campaignId:String,
        title:String,
        number:Number,
        total:Number
    },
    data() {
        return {
            
        }
    },
    methods:{
    }
}
</script>
<style scoped>


</style>