
         <template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
        <img src="../assets/gym.jpg" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" :class="{'is-active':isOpen}" @click="isOpen =! isOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu" :class="{'is-active':isOpen}">
        <div class="navbar-start">
        
        <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
        <router-link to="/Login" class="navbar-item" active-class="is-current">Login</router-link>
      

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" active-class="is-current">
            About
            </a>

            <div class="navbar-dropdown">
                
            <router-link to="/Contact Me" class='navbar-item' active-class="is-current">
                Contact Me
            </router-link>      

            <hr class="navbar-divider">

            <router-link to="/Exercise" class="navbar-item" active-class="is-current">
                Exercise
            </router-link>
            <router-link to="/Signin" class="navbar-item" active-class="is-current">
               Signin
            </router-link>

            <hr class="navbar-divider">

            <router-link to="/" class="navbar-item" active-class="is-current">
             More
            </router-link>
            </div>
        </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <router-link to="/signup" class="button is-primary" active-class="is-current">Sign-up</router-link>
                    <router-link to="/login" class="button is-light" active-class="is-current">Login</router-link>
                    
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data: () => ({
        isOpen: false
    })
}
</script>

<style>
    .is-current {
        font-weight: bold;
        color: black;
    }
</style>