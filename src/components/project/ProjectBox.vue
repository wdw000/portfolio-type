<template>
  <div class="project-box content-box" ref="project">
    <h2>Projects</h2>
    <ul class="project-big">
      <ProjectItem v-for="item in projectData" :key="item.title" :data="item" />
    </ul>

    <ul class="project-small">
      <ProjectSmallItem
        v-for="item in projectData"
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
import { Project, useStore } from "../store";
import ProjectItem from "./ProjectItem.vue";
import ProjectSmallItem from "./ProjectSmallItem.vue";

export default defineComponent({
  name: "ProjectBox",
  props: {
    projectData: {
      type: Array as PropType<Array<Project>>,
      required: true,
    },
  },
  components: { ProjectItem, ProjectSmallItem },
  computed: {
    ...mapStores(useStore),
  },
  methods: {
    setScrollY() {
      const target = this.$refs.project as HTMLElement;
      const position = target.offsetTop;

      this.mainStore.setPosition("projects", position);
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
@media (max-width: 768px) {
  .project-big {
    display: none;
  }
}

@media (min-width: 769px) {
  .project-small {
    display: none;
  }
}
</style>
