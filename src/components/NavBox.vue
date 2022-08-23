<template>
  <div class="nav-wrap" ref="nav">
    <nav class="nav-box content-box">
      <h2 class="hidden">Portfolio Nav</h2>
      <p @click="toTop">WDW's Portfolio</p>

      <ul>
        <li v-for="item in listData" :key="item">
          {{ item }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBox",
  data() {
    return {
      listData: ["About Me", "Skills", "Link", "Projects"],
    };
  },
  methods: {},
});
</script>

<style scoped>
.nav-wrap {
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 3.5rem;
  top: 0;
  background-color: white;
  z-index: 100;
}
.nav-box {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.nav-box > ul {
  display: flex;
}

.nav-box li {
  margin-left: 1.5rem;
}
</style>
