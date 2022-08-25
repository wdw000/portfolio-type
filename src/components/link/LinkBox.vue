<template>
  <div class="link-box content-box" ref="link">
    <h2>Link</h2>
    <ul>
      <LinkItem v-for="item in linkData" :key="item.title" :data="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { debounce } from "@/lib/functions";
import { mapStores } from "pinia";
import { defineComponent, PropType } from "vue";
import { Link, useStore } from "../store";
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
  computed: {
    ...mapStores(useStore),
  },
  methods: {
    setScrollY() {
      const target = this.$refs.link as HTMLElement;
      const position = target.offsetTop;

      this.mainStore.setPosition("link", position);
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

<style scoped>
.link-box > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
