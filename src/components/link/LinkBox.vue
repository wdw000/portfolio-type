<template>
  <div class="link-box content-box" id="Link">
    <h2>Link</h2>
    <ul>
      <LinkItem v-for="item in linkData" :key="item.title" :data="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Link } from "../store";
import LinkItem from "./LinkItem.vue";

export default defineComponent({
  name: "LinkBox",
  components: { LinkItem },
  props: {
    linkData: {
      type: Array as PropType<Array<Link>>,
      required: true,
    },
  },
});
</script>

<style scoped>
.link-box > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
