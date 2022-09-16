<template>
  <div class="main-trash">
    <div class="modal-trash">
      <h1 id="header">Trash Bin</h1>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Trash",
  components: {},

  setup() {},
};
</script>

<style>
.main-trash {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000025;
  z-index: 100;
}
.modal-trash {
  text-align: center;
  background-color: rgb(255, 255, 255);
  height: 820px;
  width: 400px;
  margin-left: -608px;
  padding: 50px;
}
#header {
  margin-left: -230px;
}
</style>