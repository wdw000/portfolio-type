<template>
  <div class="learning-box content-box" id="Learning">
    <h2>Learning</h2>
    <ul>
      <LearningItem
        v-for="item in learningData"
        :key="item.title"
        :data="item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Learning } from "../store";
import LearningItem from "./LearningItem.vue";

export default defineComponent({
  name: "LearningBox",
  components: { LearningItem },
  props: {
    learningData: {
      type: Array as PropType<Array<Learning>>,
      required: true,
    },
  },
});
</script>

<style scoped>
.learning-box > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
