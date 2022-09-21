<template>
  <div class="menu-main">
    <button class="menu-btn">Create Note</button>
    <br />
    <button class="menu-btn">Delete</button>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.menu-main {
  height: 100px;
  width: 170px;
  margin-left: -193px;
  margin-top: 70px;
  background-color: white;
  text-align: left;
  padding: 15px;
  box-shadow: 0 0 10px 0px rgb(126, 125, 125);
}
.menu-btn {
  margin-top: 5px;
  background: none;
  border: none;
  font-weight: 900;
  cursor: pointer;
}
button:hover {
  background-color: rgb(203, 201, 201, 0.3);
}
</style>