<template>
  <div class="skills-box content-box" id="Skills" ref="skills">
    <h2>Skills</h2>

    <ul :class="{ more: isMore, short: !isMore }">
      <SkillItem v-for="item in skillData" :key="item.title" :data="item" />
    </ul>

    <button v-if="isMoreSix" @click="handleMore" class="more-btn">
      {{ isMore ? "간략히" : "더보기" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SkillItem from "./SkillItem.vue";
import { Skills, useStore } from "../store";
import { mapStores } from "pinia";
import { debounce } from "@/lib/functions";

export default defineComponent({
  name: "SkillsBox",
  components: { SkillItem },
  props: {
    skillData: { type: Array as PropType<Array<Skills>>, required: true },
  },
  data() {
    return {
      isMore: false,
      height: 0,
    };
  },
  computed: {
    ...mapStores(useStore),
    isMoreSix() {
      return this.skillData.length > 6;
    },
  },
  methods: {
    handleMore() {
      this.isMore = !this.isMore;
    },
    setScrollY() {
      const target = this.$refs.skills as HTMLElement;
      const position = target.offsetTop;

      this.setHeight();
      this.mainStore.setPosition("skills", position);
    },
    setHeight() {
      const target = this.$refs.skills as HTMLElement;
      this.height = target.offsetHeight;
    },
  },
  created() {
    this.setScrollY = debounce(this.setScrollY, 250);
  },
  mounted() {
    this.setScrollY();
    window.addEventListener("resize", this.setScrollY);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setScrollY);
  },
  updated() {
    this.setHeight();
  },
  watch: {
    height(newValue, oldValue) {
      const diff = newValue - oldValue;
      if (newValue !== diff) {
        this.mainStore.addPosition(["link", "projects"], diff);
      }
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
  border-bottom: solid 0.15rem;
}
</style>
