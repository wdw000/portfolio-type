<template>
  <li class="project-small-item" v-scrollAnimation>
    <h3>{{ data.title }}</h3>
    <div :class="isMore ? 'item-box' : 'item'">
      <img
        v-if="!isMore"
        :src="data.imgSrc"
        :alt="data.title"
        class="item-inner"
      />
      <div v-else class="project-more">
        <div class="partition">
          <h4>Functions</h4>
          <ul class="functions" v-scrollAnimation>
            <li v-for="(item, index) in data.functions" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="partition">
          <h4>Skills</h4>
          <ul class="skills" v-scrollAnimation>
            <li v-for="(item, index) in data.skills" :key="index">
              <div class="skill-item">
                <img :src="mainStore.getSkill(item)?.src" :alt="item" />
              </div>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>

        <div class="partition">
          <h4>Link</h4>
          <ul class="link" v-scrollAnimation>
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
    </div>
    <button @click="handleMore">{{ isMore ? "간략히" : "자세히" }}</button>
  </li>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { defineComponent, PropType } from "vue";
import { Project, useStore } from "../store";

export default defineComponent({
  name: "ProjectSmallItem",
  props: {
    data: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  data() {
    return {
      isMore: false,
    };
  },
  computed: {
    ...mapStores(useStore),
  },
  methods: {
    handleMore() {
      this.isMore = !this.isMore;
    },
  },
});
</script>

<style scoped>
.project-small-item {
  background-color: var(--item-bg-color);
}
.project-small-item h3 {
  text-align: center;
  padding: 0.5rem;
}

.project-small-item > button {
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  text-decoration: underline;
}

.item-box {
  width: 80%;
  background-color: var(--project-more-bg-color);
  margin: 0 auto;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.item {
  width: 80%;
  position: relative;
  background-color: var(--project-img-bg-color);
  margin: 0 auto;
}

.item::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.item-inner {
  position: absolute;
  width: 100%;
  height: 100%;
}

.project-more > .partition:not(:last-child) {
  margin-bottom: 1rem;
}

.partition h4 {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.functions li {
  margin-left: 1rem;
  list-style: inside;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
}

.skills li {
  margin: 0.3rem 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.skills p {
  font-size: 0.7rem;
  margin: 0 0.5rem;
}

.skill-item {
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
}

.skill-item > img {
  width: 100%;
  object-fit: contain;
  padding: 0.2rem;
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
