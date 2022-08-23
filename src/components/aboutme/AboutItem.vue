<template>
  <li class="about-item">
    <div v-if="data.type !== 'email'" class="item-wrap">
      <img :src="require(`@/assets/img/${data.img}`)" alt="icon" />
      <h3>{{ data.title }}</h3>
      <p v-html="data.value"></p>
    </div>

    <a
      v-if="data.type === 'email'"
      :href="`mailto:${data.value}`"
      class="item-wrap email"
    >
      <img :src="require(`@/assets/img/${data.img}`)" alt="icon" />
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
  width: 25%;
}
.item-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-item img {
  width: 3rem;
  height: 3rem;
}

.about-item h3 {
  font-weight: bold;
}

.about-item p {
  font-size: 0.9em;
  text-align: center;
  word-break: break-all;
}

@media (max-width: 768px) {
  .about-item {
    width: 50%;
    margin-bottom: 1rem;
  }
}
</style>
