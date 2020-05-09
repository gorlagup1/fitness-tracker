<template>
  <form class="container" @submit.prevent="signup">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Sign up
            </button>
        </p>
            <button class="button is-primary" @click.prevent="google_login" >
                Login with Google
            </button>
            <br /><br />
            <button class="button is-primary" @click.prevent="facebook_login" >
                Login with Facebook
            </button>

        </div>

        <img :src="profile" v-if="profile" />
  </form>
</template>


  <script>
  import {Signup} from "../models/Users";
    export default {
    data: () => {
      return {
        email: '',
        password: '',
        error: '',
        profile:null
      }
    },
    created(){
      const googleScriptTag = document.createElement('script')
      googleScriptTag.setAttribute('src','http://apis.google.com/js/api:client.js')
      document.head.appendChild(googleScriptTag)

      googleScriptTag.onload = () => {
        gapi.load('auth2',() =>{
auth2 = gapi.auth2.init({
  client_id:GOOGLE_CLIENT-ID,
  cookiepolicy: 'single_host_origin',
  scope:'profile email'
})
        })
      }
    
            window.fbAsyncInit = function() {
            FB.init({
            appId      : FACEBOOK_CLIENT_ID,
            cookie     : true,
            xfbml      : true,
            version    : 'v3.0'
            });
        };
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },
    methods: {
        async signup(){
            try {
                await Signup(this.email, this.password);
                this.$router.push('/exercise');
            } catch (error) {
                this.error = error;
            }
        },
        google_login(){
                auth2.signup()
                .then(googleUser =>{
                    console.log(googleUser);
                    
                    const profile = googleUser.getBasicProfile();
                    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
                    console.log('Full Name: ' + profile.getName());
                    console.log('Given Name: ' + profile.getGivenName());
                    console.log('Family Name: ' + profile.getFamilyName());
                    console.log("Image URL: " + profile.getImageUrl());
                    console.log("Email: " + profile.getEmail());
                    this.profile = profile.getImageUrl();
                    return Signup("google", googleUser.getAuthResponse().access_token)
                            .then(x=> this.$router.push('/exercise'))
                } )
                .catch(error => this.error = error)
        },
        facebook_login(){
            FB.signup(response => {
                    console.log(response);
                    FB.api('/me?fields=email,name,picture', response => {
                        console.log(response);
                        this.profile = response.picture.data.url;
                    });
                    Signup("facebook", response.authResponse.accessToken)
                        .then(x=> this.$router.push('/exercise'))
                        .catch(error => this.error = error)
 
                }, 
                {scope: 'email'}
            );
        }
    }
}
</script>

<style>
</style>