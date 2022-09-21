<template>
  <div class="sketch-main">
    <div class="sketch-header">
      <h3>SketchBook</h3>
      <button @click="sketched">...</button>
    </div>
    <textarea
      focus="none"
      placeholder="Write someting.."
      rows="18"
      cols="45"
      class="sketch-text"
    ></textarea>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  name: "SketchBook",
  components: {},
  setup() {
    const store = useStore();
    const isSketched = computed(() => store.state.isSketched);

    function sketched() {
      store.commit("updateIsSketched");
    }
    return { isSketched, sketched };
  },
};
</script>

<style>
.sketch-main {
  background-color: #fff5e4;
  border-radius: 15px;
  width: 350px;
  height: 500px;
  margin-left: 30px;
  margin-top: 25px;
  box-shadow: 0 0 10px 0px #ffe3e1;
}
.sketch-main h3 {
  text-align: left;
  padding: 15px;
  font-weight: bold;
}
.sketch-text {
  background-color: #fff5e4;
  border: none;
  resize: none;
}
input:focus,
textarea {
  outline: none !important;
}
.sketch-header {
}
.sketch-header h3 {
  display: inline-flex;
  margin-right: 172px;
}
.sketch-header button {
  display: inline-flex;
  background: none;
  border: none;
  font-weight: 900;
  cursor: pointer;
}
</style>