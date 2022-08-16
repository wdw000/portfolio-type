<template>
  <HomeBox />
  <AboutBox />
  <SkillsBox />
  <LinkBox />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBox from "./components/HomeBox.vue";
import AboutBox from "./components/aboutme/AboutBox.vue";
import SkillsBox from "./components/skills/SkillsBox.vue";
import LinkBox from "./components/link/LinkBox.vue";

export default defineComponent({
  name: "App",
  components: { HomeBox, AboutBox, SkillsBox, LinkBox },
});
</script>

<style>
@import "@/assets/css/reset.css";
@import "@/assets/css/global.css";
@import "@/assets/css/color.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Noto Sans KR", sans-serif;
  font-size: clamp(13px, 10px + 1vw, 20px);
  scroll-behavior: smooth;
}

body {
  padding-top: 3.5rem;
}

h2 {
  text-align: center;
}
</style>
