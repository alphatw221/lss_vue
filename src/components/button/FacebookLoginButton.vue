<template>

    <button @click="login">
        Login with Facebook
    </button>
    <!-- <div id="fb-root"></div>
    <div class="fb-login-button" 
        data-width="" 
        data-size="large" 
        data-button-type="login_with" 
        data-layout="default" 
        data-auto-logout-link="false" 
        data-use-continue-as="false"></div> -->
</template>

<script>
export default {
    props:{
        busName:String
    },
    setup(){
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    },
    mounted() {
        // this.insert_fb_login_button_script();
    },
    methods:{
        insert_fb_login_button_script(){
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
                appId: process.env.VUE_APP_FB_APP_ID,   
                cookie: true,
                xfbml: true,
                version: "v13.0",
            });
            window.FB.login(response => {
                const payload = {
                        'response':response
                    }
                this.eventBus.emit(this.busName, payload)
            });

        }
    }
}
</script>

<style>
</style>