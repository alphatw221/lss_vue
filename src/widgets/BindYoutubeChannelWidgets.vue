<template>
    <div>
        <v-card>
            <div>
                <h3>Bind Youtube Channel</h3>
                <BindYoutubeChannelButton />
            </div>

            <div >
                <v-avatar v-for="channel in youtubeChannels" v-bind:key="channel.id">
                    <img :src="channel.image" alt="">
                </v-avatar>
            </div>
        </v-card>
    </div>
</template>

<script>

import BindYoutubeChannelButton from '@/components/button/BindYoutubeChannelButton.vue'

import { get_user_subscription_youtube_channels } from '@/api/user_subscription'

export default {
    components:{
        BindYoutubeChannelButton
    },
    mounted(){
        this.get_youtube_channels()
        
    },
    data(){
        return{
            youtubeChannels:[]
        }
    },
    methods:{
        get_youtube_channels(){
            get_user_subscription_youtube_channels().then(response=>{
                console.log(response)
                this.youtubeChannels = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
    }
}
</script>

<style>

</style>