<template>
  <div class="signin-main">
    <h1>Welcome to NoteThat!</h1>
    <br />
    <div class="input">
      <input type="email" placeholder="Your e-mail" />
    </div>
    <br />
    <div>
      <input type="password" placeholder="Your password" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.signin-main {
  position: absolute;
  top: 25%;
  left: 35%;
  margin-top: -50px;
  margin-left: -50px;
  display: flex;
  background-color: rgb(82, 82, 236);
  height: 500px;
  width: 600px;
  border-radius: 10px;
}
.input {
  display: inline-block;
}
.signin-main h1 {
  color: white;
  font: sans-serif;
  font-size: 30px;
}
.signin-main h3 {
  color: white;
  font: sans-serif;
  font-size: 20px;
}
</style>