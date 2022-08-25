<template>
  <li class="project-item">
    <div class="square">
      <img :src="data.imgSrc" :alt="data.title" class="inner" />
    </div>
    <div class="content">
      <h3>{{ data.title }}</h3>

      <div class="partition">
        <h4>Functions</h4>
        <ul class="functions">
          <li v-for="(item, index) in data.functions" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="partition">
        <h4>Skills</h4>
        <ul class="skills">
          <li v-for="(item, index) in data.skills" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="partition">
        <h4>Link</h4>
        <ul class="link">
          <li v-if="data.git" class="git">
            <a :href="data.git" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/img/github.svg" alt="github" />
              <p class="open-new-tap">GitHub</p>
            </a>
          </li>
          <li v-if="data.web" class="web">
            <a :href="data.web" target="_blank" rel="noopener noreferrer">
              <img
                src="@/assets/img/language_FILL0_wght400_GRAD0_opsz48.svg"
                alt="web"
              />
              <p class="open-new-tap">WEB</p>
            </a>
          </li>
          <li v-if="data.pdf" class="">
            <a :href="data.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="@/assets/img/picture_as_pdf_FILL0_wght400_GRAD0_opsz48.svg"
                alt="pdf"
              />
              <p class="open-new-tap">PDF</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "../store";

export default defineComponent({
  name: "ProjectItem",
  props: {
    data: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>

<style scoped>
.project-item {
  display: flex;
  margin-bottom: 2rem;
}

.square {
  flex: 1;
}

.content {
  flex: 1.1;
  padding: 1rem 2rem;
  background-color: var(--item-bg-color);
}

.content h3 {
  text-align: center;
  border-bottom: solid 1px black;
  padding-bottom: 0.5rem;
  font-weight: bold;
}

.content h4 {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.partition {
  margin: 1rem 0;
}

.functions li {
  margin-left: 1rem;
  list-style: inside;
}

.skills {
  display: flex;
}

.skills li {
  margin-left: 1rem;
}

.link {
  display: flex;
  margin-left: 1rem;
}

.link li {
  margin-right: 1.5rem;
}

.link a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link p {
  font-size: 0.8em;
}

.link img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
}
</style>
