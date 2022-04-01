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

            <v-card v-for="comment,index in comments" :key="index">
                <v-card-title>
                    Customer:{{comment.customer_name}}
                </v-card-title>

                <v-card-subtitle>
                    Platform:{{comment.platform}}
                </v-card-subtitle>
                <v-card-text>
                    {{comment.message}}
                </v-card-text>
                
            </v-card>            

        </v-card>
        
        
    </v-container>
</template>

<script>
import {campaign_comment_category_list} from '@/api/campaign_comment'
// import CommentCategoryCountCard from '@/components/card/CommentCategoryCountCard.vue'

export default {
    name:"SellerCommentSummarizePage",
    components: { 
        // CommentCategoryCountCard
    },

    data() {
        return {
            campaign_id:this.$route.params.campaign_id,
            category_name:this.$route.params.category_name,
            comments:[],
            progressing:true
        }
    },
    mounted(){
        campaign_comment_category_list(this.campaign_id,this.category_name).then(
            res=>{
                console.log(res.data)
                this.comments = res.data
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