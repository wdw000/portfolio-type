<template>
  <div class="about-box content-box" ref="about_me">
    <h2>About Me</h2>
    <ul>
      <AboutItem v-for="item in listData" :key="item.type" :data="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { debounce } from "@/lib/functions";
import { mapStores } from "pinia";
import { defineComponent } from "vue";
import { useStore } from "../store";
import AboutItem from "./AboutItem.vue";

export interface AboutProps {
  type: string;
  title: string;
  value: string;
  img: string;
}

export default defineComponent({
  name: "AboutBox",
  components: { AboutItem },
  data() {
    return {
      listData: [
        {
          type: "name",
          title: "이름",
          value: "왕도원",
          img: "face_FILL0_wght400_GRAD0_opsz48.svg",
        },
        {
          type: "birth",
          title: "생년월일",
          value: "98.02.20",
          img: "cake_FILL0_wght400_GRAD0_opsz48.svg",
        },
        {
          type: "school",
          title: "학력",
          value: "동양미래대학교<br>(컴퓨터정보통신과)",
          img: "school_FILL0_wght400_GRAD0_opsz48.svg",
        },
        {
          type: "email",
          title: "이메일",
          value: "dowonwang01@<br>gmail.com",
          img: "mail_FILL0_wght400_GRAD0_opsz48.svg",
        },
      ],
    };
  },
  computed: {
    ...mapStores(useStore),
  },
  created() {
    this.setScrollY = debounce(this.setScrollY, 250);
  },
  methods: {
    setScrollY() {
      const target = this.$refs.about_me as HTMLElement;
      const position = target.offsetTop;

      this.mainStore.setPosition("aboutMe", position);
    },
  },
  mounted() {
    this.setScrollY();
    window.addEventListener("resize", this.setScrollY);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setScrollY);
  },
});
</script>

<style scoped>
.about-box > ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
