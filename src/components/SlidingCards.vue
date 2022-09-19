<template>
  <div class="wlcome">
    <div class="msg">Good {{ dayTime }}, {{ user }}</div>
    <div class="time">kfdkbdbf</div>
  </div>

  <div>
    <a-carousel autoplay>
      <div>
        <h3>
          "Frankly, my dear, I don't give a damn." Gone with the Wind (1939) ...
        </h3>
      </div>
      <div>
        <h3>
          "I'm gonna make him an offer he can't refuse." The Godfather (1972)
          ...
        </h3>
      </div>
      <div>
        <h3>
          "Toto, I've a feeling we're not in Kansas anymore." The Wizard of Oz
          (1939) ...
        </h3>
      </div>
      <div><h3>"Say hello to my little friend." Scarface</h3></div>
    </a-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const user = ref("Selim");
    const dayTime = ref("afternoon");

    return { user, dayTime };
  },
};
</script>
  
  <style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 140px;
  line-height: 160px;
  background: #f6828e;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.main {
  display: inline;
}
.wlcome {
  padding: 10px;
  height: 44px;
  background: #f6828e;
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: monospace;
}
</style>
  