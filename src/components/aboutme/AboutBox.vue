<template>
  <h2>About Me</h2>
  <ul v-for="item in listData" :key="item.title">
    <AboutItem :data="item" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutItem from "./AboutItem.vue";

export interface AboutProps {
  title: string;
  value: string;
}

export default defineComponent({
  name: "AboutBox",
  components: { AboutItem },
  data() {
    return {
      listData: [
        { title: "이름", value: "왕도원" },
        { title: "생년월일", value: "98.02.20" },
        { title: "학력", value: "동양미래대학교(컴퓨터정보공학과)" },
        { title: "이메일", value: "dowonwang01@gmail.com" },
      ],
    };
  },
});
</script>

<style scoped></style>
