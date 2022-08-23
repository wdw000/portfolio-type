<template>
  <div class="project-box content-box">
    <h2>Projects</h2>
    <ul>
      <ProjectItem v-for="item in projectData" :key="item.title" :data="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "../store";
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
});
</script>

<style scoped></style>
