<template>
  <div class="main-trash">
    <div class="modal-trash">
      <h1 id="header-dlt">Trash Bin</h1>

      <hr />

      <div class="list-dlt">
        <div class="cards-dlt" v-for="note in notes" :key="note.index">
          <div class="btns-dlt">
            <div>
              <a-button
                @click="returnNote(note.id)"
                type="link"
                shape="circle"
                class="more"
              >
                <template #icon><RedoOutlined /></template>
              </a-button>
            </div>
            <div>
              <a-button
                @click="deleteNoteTotally(note.id)"
                type="link"
                shape="circle"
                class="more"
              >
                <template #icon><DeleteFilled /></template>
              </a-button>
            </div>
          </div>
          <div class="card-dlt">
            <div class="card-header-dlt">
              {{
                note.header.length > 12
                  ? note.header.substring(0, 12) + "..."
                  : note.header
              }}
            </div>
            <div class="card-content-dlt">
              {{
                note.content.length > 50
                  ? note.content.substring(0, 50) + "..."
                  : note.content
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDeletedNoteList } from "@/composables/axiosFunctions";
ca;
import { getNoteList } from "@/composables/axiosFunctions";
import { DeleteFilled } from "@ant-design/icons-vue";
import { RedoOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import axios from "axios";

export default {
  name: "Trash",
  components: { DeleteFilled, RedoOutlined },

  setup() {
    const store = useStore();
    const notes = computed(() => store.state.deletedNotes);

    getDeletedNoteList().then((notes) => {
      store.commit("setDeletedNotes", notes);
    });

    var token = localStorage.getItem("token");

    function deleteNoteTotally(id) {
      axios
        .delete(
          "http://localhost:3000/note1/" + id,

          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then(() => {
          getDeletedNoteList().then((notes) => {
            store.commit("setDeletedNotes", notes);
          });
        });
    }

    function returnNote(id) {
      axios
        .delete(
          "http://localhost:3000/note2/" + id,

          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then(() => {
          getDeletedNoteList().then((notes) => {
            store.commit("setDeletedNotes", notes);
          });
        })
        .then(() => {
          getNoteList().then((notes) => {
            store.commit("setNotes", notes);
            console.log("haydaaaaa");
          });
        });
    }

    return { notes, deleteNoteTotally, returnNote };
  },
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
  background-color: #00000075;
  z-index: 100;
}
.modal-trash {
  text-align: center;
  background-color: rgb(217, 211, 212);
  height: 820px;
  width: 400px;
  margin-left: -608px;
  padding: 40px;
}
#header-dlt {
  margin-left: -230px;
}
.btns-dlt {
  margin-left: -75px;
}
.list-dlt {
  padding: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 600px;
  width: 350px;
  margin-left: 7px;
}
.cards-dlt {
  display: inline-flex;
  background-color: white;
  line-height: 30px;
  margin: 30px 3px;
  border-radius: 15px;
  width: 270px;
  padding-left: 24px;
}
.card-dlt {
  width: 350px;
  height: 100px;
  margin-left: 30px;
}
.more-dlt {
  margin: 8px;
}

.aaa-dlt {
  margin-top: 25px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
  background-color: rgb(242, 241, 241);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
  height: 400px;
}
.top-side-dlt {
  margin-left: 10px;
  height: 75px;
  color: rgb(0, 0, 0);
  background-color: rgb(242, 241, 241);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
}
.card-content-dlt {
  padding: -26px;
  max-width: 210px;
}
.card-header-dlt {
  width: 271px;
  background-color: rgb(68, 68, 68);
  border-top-right-radius: 15px;
  border-top-left-radius: 5px;
  color: white;
  padding: 1px;
  margin-left: -27px;
}
.aaa-dlt *::-webkit-scrollbar {
  width: 4px;
  height: 5px;
  padding: 10px;
}

.aaa-dlt *::-webkit-scrollbar-track {
  background: rgb(206, 199, 200);
}

.aaa-dlt *::-webkit-scrollbar-thumb {
  background-color: #c41b1b;
  border-radius: 4px;
}
</style>