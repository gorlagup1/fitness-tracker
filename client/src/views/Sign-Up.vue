template>
  <form class="container" @submit.prevent="Sign-Up">
      {{error}}
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
        <p class="control has-icons-left">
            <input class="input" type="ContactNumber" placeholder="+8019" v-model="ContactNumber">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" v-on:click="Sign-Up">
            Sign-Up
            </button>
        </p>
        </div>
  </form>
</template>

<script>
  import { SignUp } from "../models/Users";

export default {
  data(){
    return{
      email:'',
      passsword:'',
      ContactNumber:"",
      error:''
    }
  },
  methods:{
          SignUp(){
        try {
          Login(this.email, this.password, this.ContactNumber);
          this.$router.push('/Exercise');
        } catch (error) {
          this.error = error;
        }
      }
    }
  }; 
</script>

<style>
    
</style>