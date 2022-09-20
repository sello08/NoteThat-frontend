<template>
  <div class="signin-main">
    <h1>NoteThat</h1>
    <h4>Just note.</h4>
    <br />
    <input
      class="input"
      v-model="name"
      type="text"
      placeholder="Enter your name"
    />
    <input
      class="input"
      v-model="surname"
      type="text"
      placeholder="Enter your surname"
    />
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
    <button class="btn-signup" @click="signUp()">Sign Up</button>
    <br />
    <br />
    <br />
    {{ msg }}
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: " SignUp ",
  components: {},

  setup() {
    var name = ref("");
    var surname = ref("");
    var email = ref("");
    var password = ref("");
    var msg = ref("");

    async function signUp() {
      await axios
        .post("http://localhost:3000/signup", {
          name: name.value,
          surname: surname.value,
          email: email.value,
          password: password.value,
        })
        .then((res) => {
          console.log(res.data);
          msg.value = res.data;
        });
    }

    return {
      signUp,
      name,
      surname,
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
  box-shadow: 0 0 30px 0px black;
}
.input {
  border: 1px white solid;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 40px;
  background: none;
}
.btn-signup {
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