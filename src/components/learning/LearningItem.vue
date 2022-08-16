<template>
  <li class="learning-item square">
    <div class="inner">
      <h3 class="hidden">{{ data.title }}</h3>
      <img :src="data.src" :alt="data.title" />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SkillData } from "../skills/SkillsBox.vue";

export default defineComponent({
  name: "LearningItem",
  props: {
    data: { type: Object as PropType<SkillData>, required: true },
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
