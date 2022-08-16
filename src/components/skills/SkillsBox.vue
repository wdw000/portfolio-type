<template>
  <div class="skills-box content-box" id="Skills">
    <h2>Skills</h2>
    <ul :class="{ more: isMore, short: !isMore }">
      <SkillItem v-for="item in skillData" :key="item.title" :data="item" />
    </ul>
    <button v-if="skillData.length > 6" @click="handleMore" class="more-btn">
      {{ isMore ? "간략히" : "더보기" }}
    </button>
  </div>
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
      isMore: false,
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
    handleMore() {
      this.isMore = !this.isMore;
    },
  },
});
</script>

<style scoped>
.skills-box > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skills-box > .short > li:nth-child(n + 7) {
  display: none;
}

.skills-box > .more > li:nth-child(n + 7) {
  display: block;
}

.more-btn {
  display: block;
  margin: 0 auto;
  border-bottom: solid black 1px;
}
</style>
