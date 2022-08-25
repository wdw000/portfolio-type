<template>
  <div class="project-box content-box" ref="project">
    <h2>Projects</h2>
    <ul>
      <ProjectItem v-for="item in projectData" :key="item.title" :data="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { debounce } from "@/lib/functions";
import { mapStores } from "pinia";
import { defineComponent, PropType } from "vue";
import { Project, useStore } from "../store";
import ProjectItem from "./ProjectItem.vue";

export default defineComponent({
  name: "ProjectBox",
  props: {
    projectData: {
      type: Array as PropType<Array<Project>>,
      required: true,
    },
  },
  components: { ProjectItem },
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
  mounted() {
    this.setScrollY();
    window.addEventListener("resize", debounce(this.setScrollY, 250));
  },
  beforeUnmount() {
    window.removeEventListener("resize", debounce(this.setScrollY, 250));
  },
});
</script>

<style scoped></style>
