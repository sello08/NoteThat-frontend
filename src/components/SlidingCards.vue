<template>
  <div class="wlcome">
    <div class="msg">Good days, {{ user }}!</div>
    <div class="time">{{ dayTime }}</div>
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

    const d = new Date();
    var year = d.getFullYear();
    var mounth = d.getMonth();
    var day = d.getUTCDate();

    var dayTime = day + "/" + mounth + "/" + year;

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
  background: #ff9494;
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
  background: #ff9494;
}
.msg {
  display: inline-flex;
  color: white;
  font-weight: 400;
  font-size: 18px;
  padding-right: 965px;
}
.time {
  display: inline-flex;
  color: white;
  font-weight: 200;
  font-size: 16px;
  margin-right: 0px;
}
</style>
  