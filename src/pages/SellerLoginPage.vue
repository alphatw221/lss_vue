<template>
    <v-app>
        <v-main>
            <!-- <v-carousel :show-arrows="false" hide-delimiters> -->
            <v-carousel :show-arrows="false" >
                    <v-carousel-item
                    v-for="(item,i) in carousel_items"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
            </v-carousel>

        </v-main>
    </v-app>
    


</template>



<script>

// import {admin_login} from '@/api/user'

export default {
    name:"SellerLoginPage",
    data() {
        return {
            carousel_items: [
                {
                    src: "@/assets/image/login/carousel-1.jpg",
                },
                {
                    src: "@/assets/image/login/carousel-2.jpg",
                },
                {
                    src: "@/assets/image/login/carousel-3.jpg",
                },
            ],
        }
    },
    methods:{
        // login(){
        //     admin_login({"username":this.loginForm.useremail,"password":this.loginForm.password}).then(
        //         response=>{
        //         console.log(response)
        //         this.$cookies.set("access_token", response.data.access)
        //         this.$store.commit('set_access_token', response.data.access)
        //         this.$router.push('/admin_console_page');
        //         }
        //     ).catch(
        //         err=>{
        //         console.log(err)
        //         }
        //     ).catch(
        //         err=>alert(err.message)
        //     )
        // }
    }
}
</script>

<style>

</style>