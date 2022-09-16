<template>
  <li class="project-small-item">
    <div class="project-wrap">
      <div class="project-img-box" ref="img">
        <img
          v-scrollAnimation
          class="project-img"
          :src="data.imgSrc"
          :alt="data.title"
        />
      </div>
      <div v-if="isMore" class="project-content">
        <h3 class="title">{{ data.title }}</h3>
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
              <div class="skill-icon">
                <img :src="mainStore.getSkill(item)?.src" :alt="item" />
              </div>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>

        <div class="partition">
          <h4>Link</h4>
          <ul class="link" v-scrollAnimation>
            <li v-if="data.git">
              <a :href="data.git" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/github.svg" alt="github" />
                <p class="open-new-tap">GitHub</p>
              </a>
            </li>

            <li v-if="data.web">
              <a :href="data.web" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/language_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="web"
                />
                <p class="open-new-tap">WEB</p>
              </a>
            </li>

            <li v-if="data.pdf">
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
      <button @click="handleMore" class="more-btn">
        {{ isMore ? "간략히" : "자세히" }}
      </button>
    </div>
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
/* img */
.project-img-box {
  position: relative;
  background-color: var(--project-img-bg-color);
}

.project-img-box::after {
  display: block;
  content: "";
  padding-bottom: 100%;
}

.project-img {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* content */
.project-small-item {
  margin-bottom: 2rem;
}

.project-wrap {
  background-color: var(--item-bg-color);
  padding: 5%;
}

.project-content {
  background-color: var(--project-more-bg-color);
  height: fit-content;
  padding: 1rem;
}

.title {
  font-size: 1.2rem;
  text-align: center;
  border-bottom: solid 0.1rem;
  padding-bottom: 1rem;
  font-weight: bold;
}

.partition {
  margin: 1rem 0;
}

.partition > h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.partition > ul {
  margin-left: 1rem;
}

.partition li {
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.functions li {
  list-style: inside;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.skills > li {
  display: flex;
}

.skill-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.3rem;
}

.skill-icon > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.link {
  display: flex;
}

.link a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link img {
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.2rem;
  filter: var(--icon-invert);
}

.more-btn {
  font-size: 1.2rem;
  margin: 0 auto;
  display: block;
  text-decoration: underline;
  margin-top: 1rem;
  margin-bottom: 0;
}
</style>
