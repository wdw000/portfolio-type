<template>
  <li class="skill-item square">
    <div class="inner">
      <h3 class="hidden">{{ data.title }}</h3>
      <img :src="data.src" :alt="data.title" v-scrollAnimation />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Skills } from "../store";

export default defineComponent({
  name: "SkillItem",
  props: {
    data: { type: Object as PropType<Skills>, required: true },
  },
});
</script>

<style scoped>
.skill-item {
  margin-bottom: 2%;
}

.square {
  width: 32%;
}
</style>
