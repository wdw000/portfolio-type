<template>
  <div class="home-box">
    <h1 class="hidden">WDW's Portfolio</h1>
  </div>
  <NavBox />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBox from "./NavBox.vue";

export default defineComponent({
  name: "HomeBox",
  components: { NavBox },
});
</script>

<style scoped>
.home-box {
  background-color: var(--item-bg-color);
}
</style>
