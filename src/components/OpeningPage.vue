<template>
  <div class="header">
    <h1>NoteThat</h1>
    <div class="signs">
      <a-button id="new" type="primary" danger size="medium" shape="flat"
        ><router-link to="/signin">Sign In</router-link>
      </a-button>
      <a-button id="new" type="primary" danger size="medium" shape="default"
        ><router-link to="/signup">Sign Up</router-link>
      </a-button>
    </div>
  </div>
  <div class="content">
    <h1>Now NoteThat free to use. Forever!!!</h1>
  </div>
  <div class="footer">
    <h1>Feel free to forget.</h1>
    <br />
    <h2>
      Remember all things via using NoteThat. Plan everything in one place.
    </h2>
    <br />
    <a-button id="new" type="primary" danger size="large" shape="flat"
      ><router-link to="/signup">Join now for Free.</router-link>
    </a-button>
    <br />
    <span class="link"
      ><router-link to="/signup"
        >Do you have an account? Simply Sign in.</router-link
      ></span
    >
  </div>
</template>

<script>
export default {
  name: "OpeningPage",
  components: {},
  setup() {},
};
</script>

<style>
#new {
  margin: 10px;
}
.header {
  height: 80px;
  background: #f6828e;
}
.header h1 {
  display: inline-block;
  color: white;
  font-size: 50px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
}
.signs {
  display: inline-block;
  margin-left: 800px;
}
.content {
  background-color: black;
  height: 170px;
}
.content h1 {
  display: inline-block;
  color: white;
  font-size: 30px;
  margin-top: 50px;
}

.footer {
  background: #ffffff;
  height: 500px;
}
.footer h1 {
  display: inline-block;
  color: black;
  font-size: 50px;
  margin-top: 50px;
  font-weight: bold;
}
.footer h2 {
  display: inline-block;
  color: black;
  font-size: 20px;
}
.link {
  text-decoration: none;
  font-weight: bold;
  color: black;
}
</style>