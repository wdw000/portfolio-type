<template>
  <li>
    <h3>{{ data.title }}</h3>
    <p>{{ data.value }}</p>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AboutProps } from "./AboutBox.vue";

export default defineComponent({
  name: "AboutItem",
  props: {
    data: { type: Object as PropType<AboutProps>, required: true },
  },
});
</script>

<style scoped></style>
