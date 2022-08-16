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
import { instance } from "@/main";
import { defineComponent } from "vue";
import { SkillData } from "../skills/SkillsBox.vue";
import LearningItem from "./LearningItem.vue";

export default defineComponent({
  name: "LearningBox",
  components: { LearningItem },
  data() {
    return {
      learningData: [] as SkillData[],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await instance.get("learning");

      if (res.statusText === "OK") {
        this.learningData = res.data;
      }
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
