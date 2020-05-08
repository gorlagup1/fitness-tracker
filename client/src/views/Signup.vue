
   <template>
<div class="Register">
     <div id="nav">
      <ul class="harika">
      <li class="h"><router-link to="/">Home</router-link> </li>
       <li class="h"><router-link to="/log">Login</router-link>
    </li>
      <li class="h"><router-link to="/reg">Register</router-link></li>
      <li class="h"><router-link to="/about">About</router-link></li>
      </ul>
    </div>
<section id="team">
    <h5 class="section-heading text-uppercase">What does it mean to be fit? Finding a discrete definition is somewhat difficult. According to the dictionary, fitness means: “the quality or state of being fit.<br>" (1) (The definition of “fit” is: “sound physically and mentally.") (2) If you find those words somewhat vague, you’re not alone.

<br>And that’s sort of the point, according to exercise experts. <br>Fitness doesn’t have to mean that you’re an ultra-marathoner or that you can perform one pull-up or one hundred.<br> Fitness can mean different things for different people.</h5>
    <div class="reg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">REGISTER</h2>
            <h3 class="section-heading text-uppercase">Please ENTER your Credentials</h3>
          </div>
        </div>
        <div class="row" align="center">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Mail ID" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="Address" type="text" placeholder="Address" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="State" type="text" placeholder="State,Country" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="password" type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" class="hari" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>
</template>