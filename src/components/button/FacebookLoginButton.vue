<template>
    <div id="fb-root"></div>
    <div class="fb-login-button" 
        data-width="" 
        data-size="large" 
        data-button-type="login_with" 
        data-layout="default" 
        data-auto-logout-link="false" 
        data-use-continue-as="false"></div>
</template>

<script>
import { initFacebook } from "@/plugins/facebook_login";
export default {
    setup(){
        initFacebook();
    },
    mounted() {
        this.create_fb_login_button_script();
    },
    methods:{
        create_fb_login_button_script(){
            let buttonScript = document.createElement('script')
            buttonScript.async=true
            buttonScript.defer=true
            buttonScript.setAttribute('src', 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0&appId=967598017063136&autoLogAppEvents=1')
            buttonScript.setAttribute('crossorigin', 'anonymous')
            buttonScript.setAttribute('nonce', 'KQeupbVS')
            document.body.appendChild(buttonScript)
        },
        login(){
            window.FB.init({
                appId: '967598017063136',   //TODO process.env
                cookie: true,
                xfbml: true,
                version: "v13.0",
            });
            window.FB.login(function(response) {
                if (response.status === 'connected') {

                    // Logged into your webpage and Facebook.
                } else {
                    // The person is not logged into your webpage or we are unable to tell. 
                }
            });

        }
    }
}
</script>

<style>
</style>