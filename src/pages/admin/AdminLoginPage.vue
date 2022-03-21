<template>
    

    
<!--     
    <div id="login-page" class="row">
    <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
        <form class="login-form" method="POST" action="">
        <div class="row">
            <div class="input-field col s12">
            <h5 class="ml-4">Sign In</h5>
            </div>
        </div>
        <div class="row margin">
            <div class="input-field col s12">
            <i class="material-icons prefix pt-2">person_outline</i>
            
            <label for="email" class="center-align">Username</label>
            <input id="email" type="email" class="" name="email"
                autocomplete="email" autofocus v-model="loginForm.useremail">

            </div>
        </div>
        <div class="row margin">
            <div class="input-field col s12">
            <i class="material-icons prefix pt-2">lock_outline</i>
            
            <label for="password">Password</label>
            <input id="password" type="password" class=""
                name="password"  autocomplete="current-password" v-model="loginForm.password">

            </div>
        </div>

        <div class="row">
            <div class="col s12 m12 l12 ml-2 mt-1">
            <p>
                <label>
                <input type="checkbox" name="remember" id="remember" >
                <span>Remember Me</span>
                </label>
            </p>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
            <button type="submit" class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12" @click="login">
                Login
            </button>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6 m6 l6">
            <p class="margin medium-small"><a href="">Register Now!</a></p>
            </div>
            <div class="input-field col s6 m6 l6">
            <p class="margin right-align medium-small">
                <a href="">Forgot password?</a>
            </p>
            </div>
        </div>
        </form>
    </div>
    </div> -->
    <v-app>
    <div id="login-page" >
    
    <v-container class="full" >
            
                <v-card class="login_block">
                        <h3 class="login-title">
                            Please Login
                        </h3>
                        <div class="login-button-section">
                            
                            <v-text-field
                                label="Email"
                                @keyup.enter="login"
                                v-model="loginForm.username"
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                @keyup.enter="login"
                                v-model="loginForm.password"
                            ></v-text-field>

                        </div>
                        
                        <div class="login-button" >
                            <v-btn @click="login">
                                Login
                            </v-btn>
                        </div>
                    
                </v-card>
            
           
            
        </v-container>
    </div>
    </v-app>
    
</template>



<script>

import {admin_login} from '@/api/user'

export default {
    name:"AdminLoginPage",
    data() {
        return {
           loginForm:{
                username:"",
                password:"",
            },
        }
    },
    methods:{
        login(){
            admin_login({"username":this.loginForm.username,"password":this.loginForm.password}).then(
                response=>{
                console.log(response)
                this.$cookies.set("access_token", response.data.access)
                this.$store.commit('set_access_token', response.data.access)
                this.$router.push('/admin_console_page');
                }
            ).catch(
                err=>{
                console.log(err)
                }
            ).catch(
                err=>alert(err.message)
            )
        }
    }
}
</script>

<style>

#login-page{
    background-image: url("@/assets/login/carousel-2.jpg");
    background-repeat: no-repeat;
	background-size: cover;
    background-size: 100% 100%;
	height: 100%;
    width: auto;
}








.login_block {

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

.login-button{
    text-align: center;
    margin:10px;
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
}
</style>