<template>
  <a :href="data.imgURL" target="_blank">
    <li>
      <img :src="data.imgSrc" :alt="data.title" />
      <p>{{ data.title }}</p>
    </li>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { LinkData } from "./LinkBox.vue";

export default defineComponent({
  name: "LinkItem",
  props: {
    data: { type: Object as PropType<LinkData>, required: true },
  },
});
</script>
