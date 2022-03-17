<template>
    <v-app>

        
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