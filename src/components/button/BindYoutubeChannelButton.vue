<template>
    <div class="google-login-btn">
        <a 
        style="margin: auto"
        v-bind:href="googleLoginHyperReference" role="button" >
            <img 
            width="24" 
            style="margin-bottom:3px; margin-right:5px" 
            alt="Google sign-in" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
            />
            Login with Google
    </a>
    </div>
    
    
</template>

<script>
export default {
    data(){
        return {
            scopes:[
                "https://www.googleapis.com/auth/youtube"+"%20",
                "https://www.googleapis.com/auth/youtubepartner-channel-audit"+"%20",
                "https://www.googleapis.com/auth/userinfo.email"+"%20",
                "https://www.googleapis.com/auth/userinfo.profile"
            ],
            callback_uri:"http://localhost:8000/api/user-subscription/bind_youtube_channels_callback",
            redirect_uri:"https://localhost:8080/",
            redirect_route:"test_page1",
            response_type:"code",
            client_id:"536277208137-okgj3vg6tskek5eg6r62jis5didrhfc3.apps.googleusercontent.com",
            access_type:"offline",
        }
    },
    computed:{
        googleLoginHyperReference(){
            let href=`https://accounts.google.com/o/oauth2/v2/auth?`
            href+=`redirect_uri=${this.callback_uri}&`
            href+=`response_type=${this.response_type}&`
            href+=`client_id=${this.client_id}&`
            href+=`access_type=${this.access_type}&`
            href+=`state=${JSON.stringify({
                redirect_uri:this.redirect_uri,
                redirect_route:this.redirect_route,
                callback_uri:this.callback_uri,
                user_subscription_id:1,
                })}&`

            href+=`scope=`
            this.scopes.forEach(value=>{
                href+=value
            })
            return href
        }
    },
}

</script>

<style>
.google-login-btn {
    background-color: white;
    width:228px;
    height:40px;
    font-weight: 500; 
    font-size: 18px;
    border-radius: 5px;
}

</style>
