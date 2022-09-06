<template>
  <li class="learning-item square">
    <div class="inner">
      <h3 class="hidden">{{ data.title }}</h3>
      <img :src="data.src" :alt="data.title" v-scrollAnimation />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Learning } from "../store";

export default defineComponent({
  name: "LearningItem",
  props: {
    data: { type: Object as PropType<Learning>, required: true },
  },
});
</script>

<style scoped>
.learning-item {
  margin-bottom: 2%;
}
.square {
  width: 49%;
}
</style>
