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
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SkillItem from "./SkillItem.vue";
import { Skills } from "../store";

export default defineComponent({
  name: "SkillsBox",
  components: { SkillItem },
  props: {
    skillData: { type: Array as PropType<Array<Skills>>, required: true },
  },
  data() {
    return {
      isMore: false,
    };
  },
  methods: {
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
