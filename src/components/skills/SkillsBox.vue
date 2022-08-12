<template>
  <h2>Skills</h2>
  <ul>
    <SkillItem v-for="item in skillData" :key="item.title" :data="item" />
  </ul>
  <LearningBox />
</template>

<script lang="ts">
import { instance } from "@/main";
import { defineComponent } from "vue";
import SkillItem from "./SkillItem.vue";
import LearningBox from "../learning/LearningBox.vue";

export interface SkillData {
  title: string;
  src: string;
}

export default defineComponent({
  name: "SkillsBox",
  components: { SkillItem, LearningBox },
  data() {
    return {
      skillData: [] as SkillData[],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await instance.get("skills");

      if (res.statusText === "OK") {
        this.skillData = res.data;
      }
    },
  },
});
</script>

<style scoped></style>
