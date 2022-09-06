<template>
  <div class="learning-box content-box" ref="learning">
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
import { debounce } from "@/lib/functions";
import { mapStores } from "pinia";
import { defineComponent, PropType } from "vue";
import { Learning, useStore } from "../store";
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
  computed: {
    ...mapStores(useStore),
  },
  methods: {
    setScrollY() {
      const target = this.$refs.learning as HTMLElement;
      const position = target.offsetTop;

      this.mainStore.setPosition("learning", position);
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
});
</script>

<style scoped>
.learning-box > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
