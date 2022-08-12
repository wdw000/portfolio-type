<template>
  <h2>Link</h2>
  <ul>
    <LinkItem v-for="item in linkData" :key="item.title" :data="item" />
  </ul>
</template>

<script lang="ts">
import { instance } from "@/main";
import { defineComponent } from "vue";
import LinkItem from "./LinkItem.vue";

export interface LinkData {
  title: string;
  imgURL: string;
  imgSrc: string;
}

export default defineComponent({
  name: "LinkBox",
  components: { LinkItem },
  data() {
    return {
      linkData: [] as LinkData[],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await instance.get("link");
      if (res.statusText === "OK") {
        this.linkData = res.data;
      }
    },
  },
});
</script>
