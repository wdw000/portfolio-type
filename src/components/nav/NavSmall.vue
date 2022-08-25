<template>
  <nav class="content-box nav-small">
    <h2 class="hidden">Portfolio Small Nav</h2>
    <div>
      <p @click="$emit('toTop')">WDW's {{ mainStore.currentNav }}</p>
      <button @click="handleMore">menu</button>
    </div>

    <ul v-if="isMore" class="nav-item">
      <li v-for="item in listData" :key="item" @click="handleListClick(item)">
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { defineComponent, PropType } from "vue";
import { useStore } from "../store";

export default defineComponent({
  name: "NavSmall",
  props: {
    listData: {
      type: Array as PropType<Array<string>>,
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

    handleListClick(target: string) {
      this.$emit("moveTo", target);
      this.handleMore();
    },
  },
});
</script>

<style scoped>
.nav-small {
  flex: 1;
}

.nav-small > div {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.nav-item {
  position: absolute;
  top: 3.5rem;
  left: 0;
  padding: 0 2rem;
  width: 100%;
  background-color: white;
}

.nav-item > li {
  margin: 1rem 0;
}

@media (min-width: 769px) {
  .nav-small {
    display: none;
  }
}
</style>
