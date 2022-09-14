<template>
  <div class="signin-main">
    <h1>NoteThat</h1>
    <h4>Just note.</h4>
    <br />
    <input
      class="input"
      v-model="email"
      type="email"
      placeholder="Enter your e-mail address"
    />
    <br />
    <input
      class="input"
      v-model="password"
      type="password"
      placeholder="Enter your password"
    />
    <br />
    <button class="btn-signin" @click="signIn()">Sign In</button>
    <br />
    <br />
    <br />
    {{ msg }}
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: " SignIn ",
  components: {},

  setup() {
    var email = ref("");
    var password = ref("");
    var msg = ref("");

    async function signIn() {
      await axios
        .post("http://localhost:3000/signin", {
          email: email.value,
          password: password.value,
        })
        .then((res) => {
          // -----------------------------   Set token value to local storage ----------------------------------------

          localStorage.setItem("token", res.data.token);

          msg.value = res.data;

          if (res.data.message == "Success") {
            router.push("homepage");
          }

          // -------------------------------  Show active user name in homepage  --------------------

          var name = res.data.user.name;
          var surname = res.data.user.surname;

          localStorage.setItem("activeUser", name + " " + surname);
        });
    }

    return {
      signIn,
      email,
      password,
      msg,
    };
  },
};
</script>

<style>
.signin-main {
  position: absolute;
  top: 15%;
  left: 38%;
  margin-top: -50px;
  margin-left: -50px;
  background-color: #f6828e;
  height: 660px;
  width: 500px;
  border-radius: 10px;
}
.input {
  border: 1px white solid;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 40px;
  background: none;
}
.btn-signin {
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 300px;
  height: 40px;
  background: none;
  border: 1px white solid;
}
.signin-main h1 {
  color: white;
  font-size: 50px;
  padding-top: 150px;
  margin-bottom: 0px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
}
.signin-main h4 {
  color: white;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  margin-top: -20px;
  margin-left: 130px;
}
input::placeholder {
  font-weight: bold;
  opacity: 0.2;
  color: rgb(255, 255, 255);
  padding: 10%;
}
</style>