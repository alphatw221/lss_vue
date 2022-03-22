<template>


    <v-app>
        <!-- background carousel -->
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img v-bind:src="carousel_items[0].src" class="d-block w-100 h-100" alt="">
                </div>

                <div class="carousel-item" >
                    <img v-bind:src="carousel_items[1].src" class="d-block w-100 h-100" alt="">
                </div>
            </div>
        </div>

        <v-container class="full" >
            
                <v-card class="login_block">
                        <h3 class="login-title">
                            Login
                        </h3>
                        <div class="login-button-section">
                            <div style="margin: 10px 0px">
                                <FacebookLoginButton :busName="'buyerFacebookLogin'"/>
                            </div>
                            <div style="margin:auto;">
                                <GoogleLoginButton/>
                            </div>
                            
                        </div>
                        
                        <h6 class="browser-reminder">
                            Please use Google Chrome browser for better experience.
                        </h6>
                    
                </v-card>
            
           
            
        </v-container>
    </v-app>
</template>



<script>

// import {admin_login} from '@/api/user'
import { buyer_login} from '@/api/user'

import FacebookLoginButton from '@/components/button/FacebookLoginButton.vue'

import GoogleLoginButton from '@/components/button/GoogleLoginButton.vue'

export default {
    name:"BuyerLoginPage",
    data() {
        return {
            carousel_items: [
                {
                    src: require("@/assets/login/new-lss-carousel-1.jpg"),
                },
                {
                    src: require("@/assets/login/new-lss-carousel-2.jpg"),
                }
            ],
            
        }
    },
    components:{
        FacebookLoginButton,
        GoogleLoginButton
    },
    mounted(){
        this.eventBus.on('buyerFacebookLogin',payload=>{
            buyer_login(payload).then(response=>{

                var set_cookie = new Promise((res)=>{
                    this.$cookies.set("access_token", response.data.access)
                    res()
                })
                set_cookie.then(()=>{
                    this.$router.push('buyer')
                })
                // this.$cookies.set("access_token", response.data.access)
                // // this.$store.commit('set_access_token', response.data.access)
                // this.$router.push('/test_page1');
            }).catch(error=>{
                alert(error)
            })
        })
    },
    unmounted(){
        this.eventBus.off('buyerFacebookLogin')
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

.background{
    width: 100%; height: 100%;
}
/* keeps carousel behind all content */
.carousel { 
    z-index: -99;
    height: 100%;
    } 
    
.carousel-item {
    position: fixed; 
    /* width: 100%;  */
    /* height: 100%; */
    /* -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -ms-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    background-repeat: no-repeat;
	background-size: cover;
    background-size: 100% 100%;
	height: 100%;
    width: auto; */

    height: 100vh;
    min-height: 350px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

}



.login_block {
    /* background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important;
    margin-top: 35vh;
    margin-left: 35vh;
    margin-right: 35vh;
    padding: 5vh; */

    width: 340px;

    margin: 35vh auto;
    font-size: 15px;
    background-color: rgba(255, 255, 255, 0.65);
    border-radius: 0.25rem
    
}

.login-title{
    text-align: center;
    margin:10px;
    color: #474747 !important;
}


.login-button-section{
    text-align: center;
    margin:10px;
}

.browser-reminder{
    text-align: center;
    margin:10px;
    color: rgb(187, 14, 14) !important;
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
}


html,body{
    height: 100%;
    width: 100%;
}

.full{
    height: 100%;
    width: 100%;
    align-items: center;
}

#app {
    height: 100%;
    width: 100%;
}
</style>