<template>
  <p>WDW's Portfolio</p>
  <ul>
    <li v-for="item in listData" :key="item">{{ item }}</li>
  </ul>
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
});
</script>
