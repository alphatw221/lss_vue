<template>
    <div>
        <v-card>
            <div>
                <h3>Bind Facebook Page</h3>
                <BindFacebookPageButton :busName="'addFacebookPages'"/>
            </div>

            <div >
                <v-avatar v-for="page in facebookPages" v-bind:key="page.id">
                    <img :src="page.image" alt="">
                </v-avatar>
            </div>
        </v-card>
    </div>
</template>

<script>

import BindFacebookPageButton from '@/components/button/BindFacebookPageButton.vue'
import { get_user_subscription_facebook_pages, bind_user_facebook_pages } from '@/api/user_subscription'

export default {
    components:{
        BindFacebookPageButton
    },
    mounted(){
        this.eventBus.on('addFacebookPages',payload=>{
            this.bind_facebook_pages(payload)
        })
        this.get_facebook_pages()
        
    },
    unmounted(){
        this.eventBus.off('addFacebookPages')
    },
    data(){
        return{
            facebookPages:[]
        }
    },
    methods:{
        get_facebook_pages(){
            const user_subscription_id = 1
            //const user_subscription_id = this.$store.get('user_subscription').id
            get_user_subscription_facebook_pages(user_subscription_id).then(response=>{
                console.log(response)
                this.facebookPages = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        bind_facebook_pages(payload){
            const user_subscription_id = 1
            //const user_subscription_id = this.$store.get('user_subscription').id
            bind_user_facebook_pages(user_subscription_id,payload).then(response=>{
                this.facebookPages = response.data
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>