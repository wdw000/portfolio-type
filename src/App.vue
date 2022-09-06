<template>
  <div v-if="mainStore.status === 'init'">
    <LoadingSpinner />
  </div>
  <div class="main" v-else>
    <HomeBox />
    <AboutBox />
    <SkillsBox :skillData="mainStore.data.skills.data" />
    <LearningBox :learningData="mainStore.data.learning.data" />
    <LinkBox :linkData="mainStore.data.link.data" />
    <ProjectBox :projectData="mainStore.data.projects.data" />
    <FooterBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBox from "./components/HomeBox.vue";
import AboutBox from "./components/aboutme/AboutBox.vue";
import SkillsBox from "./components/skills/SkillsBox.vue";
import LinkBox from "./components/link/LinkBox.vue";
import { mapStores } from "pinia";
import { useStore } from "./components/store";
import LearningBox from "./components/learning/LearningBox.vue";
import ProjectBox from "./components/project/ProjectBox.vue";
import FooterBox from "./components/footer/FooterBox.vue";
import LoadingSpinner from "./components/loading/LoadingSpinner.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeBox,
    AboutBox,
    SkillsBox,
    LinkBox,
    LearningBox,
    ProjectBox,
    FooterBox,
    LoadingSpinner,
  },
  computed: {
    ...mapStores(useStore, ["getState"]),
  },
  created() {
    this.mainStore.setData();
  },
});
</script>

<style>
@import "@/assets/css/reset.css";
@import "@/assets/css/global.css";
@import "@/assets/css/color.css";
@import "@/assets/css/trasition.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Noto Sans KR", sans-serif;
  font-size: clamp(13px, 10px + 1vw, 20px);
  scroll-behavior: smooth;
}

.main > body {
  padding-top: 3.5rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}
</style>
