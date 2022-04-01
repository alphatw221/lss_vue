<template>
    <v-container fluid>
       <v-layout box> 
           <v-flex xs4 item1>1</v-flex> 
           <v-flex xs4 item2>2</v-flex> 
           <v-flex xs4 item3>3</v-flex> 
        </v-layout> 
    </v-container>

</template>

<script>
import {campaign_comment_summarize} from '@/api/campaign_comment'
// import CommentCategoryCountCard from '@/commponent/card/CommentCategoryCountCard.vue'


export default {
    name:"SellerCommentSummarizePage",
    components: { 
        // CommentCategoryCountCard
    },

    data() {
        return {
            campaign_id:361,
            comment_categories:[],

        }
    },
    mounted(){
        campaign_comment_summarize(this.campaign_id).then(
            res=>{
                this.comment_categories = res.data
            }
        ).catch(
            error=>{
                alert(error)
            }
        )
    },
    methods:{
    }
}
</script>

<style>

</style>