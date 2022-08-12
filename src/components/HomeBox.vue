<template>
  <h1>WDW's Portfolio</h1>
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

<style scoped></style>
