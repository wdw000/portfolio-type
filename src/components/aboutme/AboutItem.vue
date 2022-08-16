<template>
  <li class="about-item">
    <img :src="require(`@/assets/img/${data.img}`)" alt="icon" />
    <div v-if="data.type !== 'email'">
      <h3>{{ data.title }}</h3>
      <p v-html="data.value"></p>
    </div>

    <a v-if="data.type === 'email'" :href="`mailto:${data.value}`">
      <h3 class="open-new-tap">{{ data.title }}</h3>
      <p v-html="data.value"></p>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AboutProps } from "./AboutBox.vue";

export default defineComponent({
  name: "AboutItem",
  props: {
    data: { type: Object as PropType<AboutProps>, required: true },
  },
});
</script>

<style scoped>
.about-item {
  display: flex;
  align-items: center;
  width: 25%;
  border: solid 1px black;
}

.about-item > img {
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
}

.about-item h3 {
  font-weight: bold;
}

.about-item p {
  font-size: 0.8em;
}
</style>
