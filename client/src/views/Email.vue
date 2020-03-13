<template>
  <div class="hero">
    <div class="hero-body"> 
      <div class="columns">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <img src="@/images/fitness-apps-featured.png" width ="800" height="800"/>
            </div>
            <div class="column">
              <h2 class="app is-size-3 has-text-centered "> <b><i>Email Us!</i></b> </h2>
              <br>
              <p>Send us an email with your concerns and we would provide a prompt response. <a>Click here.</a> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar is-expanded" role="navigation" aria-label="main navigation">
      <div class="navbar-start is-fixed-bottom">
        <router-link to="/" class="navbar-item has-text-dark">Home</router-link>
        <router-link to="/AboutUs" class="navbar-item has-text-dark">About Us</router-link>
        <router-link to="/Community" class="navbar-item has-text-dark">Community</router-link>
        <router-link to="/Activity" class="navbar-item has-text-dark">Activity</router-link>
        <router-link to="/Log" class="navbar-item has-text-dark">Log</router-link>
        <router-link to="/Share" class="navbar-item has-text-dark">Share</router-link>
        <router-link to="/Call" class="navbar-item has-text-dark">Call</router-link>
        <router-link to="/Chat" class="navbar-item has-text-dark">Chat</router-link>
        <router-link to="/Email" class="navbar-item has-text-dark">Email</router-link>
      </div>   
    </nav>
  </div>
</template>

<style >
  .hero { background-color:  #08b6ad;
}
</style>