<template>
    <label for="email">email</label>
  <input v-model="loginForm.useremail" >
    <label for="password">password</label>
  <input v-model="loginForm.password">

  <button @click="login">Login</button>
</template>

<script>

import {admin_login} from '@/api/user'

export default {
    name:"AdminLoginPage",
    data() {
        return {
           loginForm:{
                useremail:"",
                password:"",
            },
            test:"test"
        }
    },
    methods:{
        login(){

            // console.log(this.loginForm)

            admin_login({"username":this.loginForm.useremail,"password":this.loginForm.password}).then(
                response=>{
                console.log(response)
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

</style>