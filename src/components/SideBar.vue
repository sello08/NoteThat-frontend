<template>
  <div class="menu">
    <div class="avatar-user">
      <a-avatar class="avatar" :size="64">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
    <br />
    <br />
    <span class="active-user">{{ activeUser }}</span>
    <br />
    <a-button
      id="new"
      @click="updateShowing"
      type="primary"
      danger
      size="small"
      shape="round"
      >New Note +
    </a-button>
    <span class="menu2"></span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";
import { UserOutlined } from "@ant-design/icons-vue";

export default {
  name: "SideBar",
  components: { UserOutlined },
  setup() {
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);

    var activeUser = localStorage.getItem("activeUser");

    function updateShowing() {
      store.commit("updateIsShowing");
      store.commit("updateEditing2");
    }

    return { updateShowing, isShowing, isEditing, activeUser, activeUser };
  },
};
</script>

<style>
#new {
  margin-top: 32px;
}
.avatar-user {
  display: inline-block;
  margin-top: 20px;
}
.active-user {
  color: white;
}
.avatar {
  margin-top: 20px;
}
.menu {
  width: 15%;
  height: 100vh;
  background-color: rgb(68, 68, 68);
}
.menu2 {
  display: block;
  margin-top: 25px;
  height: 30px;
  text-align: center;
  background-color: rgba(182, 182, 182, 0.3);
  color: white;
}
.add-note {
  background-color: #ff9f1e;
  width: 160px;
  height: 30px;
  color: white;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin-top: 25px;
  font-size: 15px;
}
.menu2 {
}
</style>