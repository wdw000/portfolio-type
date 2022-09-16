<template>
  <div class="nav-wrap" ref="nav">
    <nav class="nav-box content-box">
      <h2 class="hidden">Portfolio Nav</h2>
      <p @click="toTop" class="click">WDW's {{ mainStore.currentNav }}</p>

      <ul class="nav-big">
        <li
          v-for="item in listData"
          :key="item"
          :class="{ on: mainStore.currentNav === item }"
          class="click"
          @click="moveTo(item)"
        >
          {{ item }}
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>

    <NavSmall :listData="listData" @moveTo="moveTo" @toTop="toTop" />
  </div>
</template>

<script lang="ts">
import { debounce } from "@/lib/functions";
import { mapStores } from "pinia";
import { defineComponent } from "vue";
import { Target, useStore } from "../store";
import NavSmall from "./NavSmall.vue";
import DarkMode from "../DarkMode.vue";

export default defineComponent({
  name: "NavBox",
  data() {
    return {
      listData: ["About Me", "Skills", "Link", "Projects"],
    };
  },
  components: { NavSmall, DarkMode },
  computed: {
    ...mapStores(useStore),
  },
  created() {
    this.setCurrentNav = debounce(this.setCurrentNav, 250);
  },
  mounted() {
    window.addEventListener("scroll", this.setCurrentNav);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.setCurrentNav);
  },
  methods: {
    toCamelCase(str: string) {
      return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, ch) => ch.toUpperCase());
    },
    moveTo(target: string) {
      const moveTarget = this.toCamelCase(target) as Target;
      const nav = this.$refs.nav as HTMLElement;
      const navHeight = nav.offsetHeight;
      const position = this.mainStore.data[moveTarget].position - navHeight;
      window.scrollTo(0, position);
    },
    toTop() {
      window.scrollTo(0, 0);
    },
    setCurrentNav() {
      const element = this.mainStore.data;
      const elementY: number[] = [];
      const nav = this.$refs.nav as HTMLElement;
      const navHeight = nav.offsetHeight;
      const current = window.scrollY + navHeight;

      for (const [key, value] of Object.entries(element)) {
        if (key !== "learning") {
          elementY.push(value.position);
        }
      }
      const [about, skills, link, projects] = elementY;

      if (current < about) {
        this.mainStore.setCurrentNav("Portfolio");
      } else if (about <= current && current < skills) {
        this.mainStore.setCurrentNav("About Me");
      } else if (skills <= current && current < link) {
        this.mainStore.setCurrentNav("Skills");
      } else if (link <= current && current < projects) {
        this.mainStore.setCurrentNav("Link");
      } else if (projects <= current) {
        this.mainStore.setCurrentNav("Projects");
      }
    },
  },
});
</script>

<style scoped>
.nav-wrap {
  border-bottom: solid 1px var(--nav-underline-color);
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 3.5rem;
  top: 0;
  background-color: var(--nav-bg-color);
  z-index: 100;
}
.nav-box {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.nav-big {
  display: flex;
  font-weight: bold;
  align-items: center;
}

.on {
  text-decoration: underline;
}

.nav-box li {
  margin-left: 1.5rem;
}

@media (max-width: 768px) {
  .nav-box {
    display: none;
  }
}
</style>
