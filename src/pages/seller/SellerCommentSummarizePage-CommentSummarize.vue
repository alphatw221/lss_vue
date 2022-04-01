<template>
    <v-container fluid >
        <v-btn
            class="ma-2"
            color="grey darken-2"
            dark
            @click="this.$router.back()"
        >
            <v-icon
            dark
            start
            >
            mdi-arrow-left
            </v-icon>Back
        </v-btn>

        <div  v-if="progressing" class="text-center">
            <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
            ></v-progress-circular>
        </div>

        <v-card 
            class="d-flex flex-wrap"
            flat
            tile>

            <CommentCategoryCountCard v-for="category,index in comment_categories" :key="index" 
            :title="category.name" 
            :number="category.comment_count"
            :total="category.total_comment_count"
            />

        </v-card>
        

    </v-container>
</template>

<script>
import {campaign_comment_summarize} from '@/api/campaign_comment'
import CommentCategoryCountCard from '@/components/card/CommentCategoryCountCard.vue'

export default {
    name:"SellerCommentSummarizePage",
    components: { 
        CommentCategoryCountCard
    },

    data() {
        return {
            campaign_id:this.$route.params.id,
            comment_categories:[],
            progressing:true
        }
    },
    mounted(){
        campaign_comment_summarize(this.campaign_id).then(
            res=>{
                console.log(res.data)
                this.comment_categories = res.data
                this.progressing = false
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