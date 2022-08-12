<template>
  <li>
    <img :src="data.src" :alt="data.title" />
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
