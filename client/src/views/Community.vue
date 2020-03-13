<template>
  <div class="hero">
    <div class="hero-body"> 
      <div class="columns">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <img src="@/images/sport.jpg" width ="500" height="300"/>
            </div>
            <div class="column">
              <h2 class="app is-size-3 has-text-centered "> Giving back to Community </h2>
              <br>
              <p>StayFit is focussed on supporting the community by sharing more information about health issues 
                  and encouraging people to take initiatives towards leading a healthy life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar is-expanded" role="navigation" aria-label="main navigation">
      <div class="navbar-start is-fixed-bottom">
        <router-link to="/" class="navbar-item is-large">Home</router-link>
        <router-link to="/AboutUs" class="navbar-item">About Us</router-link>
        <router-link to="/Community" class="navbar-item">Community</router-link>
        <router-link to="/Activity" class="navbar-item">Activity</router-link>
        <router-link to="/Log" class="navbar-item">Log</router-link>
        <router-link to="/Share" class="navbar-item">Share</router-link>
        <router-link to="/Call" class="navbar-item">Call</router-link>
        <router-link to="/Chat" class="navbar-item">Chat</router-link>
        <router-link to="/Email" class="navbar-item">Email</router-link>
      </div>  
    </nav>
  </div>
</template>

<style >
  .hero { background-color:  #08b6ad;
}
</style>