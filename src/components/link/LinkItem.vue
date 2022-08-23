<template>
  <li class="link-item">
    <a :href="data.imgURL" target="_blank">
      <div class="square">
        <div class="inner">
          <img :src="data.imgSrc" :alt="data.title" />
        </div>
      </div>
      <h3 class="open-new-tap">{{ data.title }}</h3>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Link } from "../store";

export default defineComponent({
  name: "LinkItem",
  props: {
    data: { type: Object as PropType<Link>, required: true },
  },
});
</script>

<style scoped>
.link-item {
  width: 20%;
  margin-bottom: 1rem;
}
.square {
  width: 100%;
}

.link-item h3 {
  text-align: center;
}
</style>
