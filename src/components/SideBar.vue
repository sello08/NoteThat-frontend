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
    <br />
    <a-button id="new" type="primary" danger size="small" shape="round"
      ><router-link to="/">Sign Out</router-link>
    </a-button>

    <span class="menu2"></span>
    <a-button
      id="new"
      @click="submitNote"
      type="primary"
      danger
      size="large"
      shape="round"
      >New Note
    </a-button>

    <br />
    <div id="sidemenu-btns">
      <li>
        <router-link id="link" to="/homepage">Home</router-link>
      </li>
      <li @click="isTrashClicked">
        <p id="link">Trash</p>
      </li>
      <li>
        <p id="link">Tags</p>
      </li>
      <li>
        <p id="link">Alarm</p>
      </li>
      <hr id="line" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";
import { UserOutlined } from "@ant-design/icons-vue";

export default {
  name: "SideBar",
  props: ["mode"],
  components: { UserOutlined },
  setup() {
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);

    var activeUser = localStorage.getItem("activeUser");

    function isTrashClicked() {
      store.commit("updateIsTrashedClicked");
    }
    // ------------------------ Create Note ---------------------------------------------------
    function submitNote() {
      store.commit("updateIsShowing"); //---------- Open the CreateUpdateNote Modal ---------------------------
      store.commit("updateEditing2");
    }

    return {
      isShowing,
      isEditing,
      activeUser,
      activeUser,
      isTrashClicked,
      submitNote,
    };
  },
};
</script>

<style>
#sidemenu-btns {
  color: rgb(203, 201, 201);
  font-weight: bolder;
  cursor: pointer;
  margin-left: 0px;
}
#link {
  display: inline-flex;
  height: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgb(203, 201, 201);
}
li {
  list-style-type: none;
}
li:hover {
  background-color: rgb(203, 201, 201, 0.3);
}

#new {
  margin-top: 32px;
}
.avatar-user {
  display: inline-block;
  margin-top: 20px;
}
.active-user {
  color: white;
  font-weight: bold;
}
.avatar {
  margin-top: 20px;
}
.menu {
  width: 15%;
  height: 100vh;
  background-color: rgb(68, 68, 68);
  z-index: 200;
}
.menu2 {
  display: block;
  margin-top: -5px;
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
#line {
  border: 1px rgba(182, 182, 182, 0.3) solid;
}
</style>