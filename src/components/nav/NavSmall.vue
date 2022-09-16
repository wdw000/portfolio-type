<template>
  <nav class="content-box nav-small" ref="navSmall">
    <h2 class="hidden">Portfolio Small Nav</h2>
    <div>
      <p class="click" @click="$emit('toTop')">
        WDW's {{ mainStore.currentNav }}
      </p>
      <button class="menu-btn" @click="handleMore">
        <img src="@/assets/img/menu_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
      </button>
    </div>

    <Transition name="slide">
      <ul v-show="isMore" class="nav-item">
        <li
          v-for="item in listData"
          :key="item"
          @click="handleListClick(item)"
          :class="{ on: mainStore.currentNav === item }"
          class="click"
        >
          {{ item }}
        </li>

        <li>
          <DarkMode />
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { defineComponent, PropType } from "vue";
import { useStore } from "../store";
import DarkMode from "../DarkMode.vue";

export default defineComponent({
  name: "NavSmall",
  components: { DarkMode },
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
    handleClickOutside(event: Event) {
      const navSmall = this.$refs.navSmall as HTMLElement;
      const target = event.target as Node;

      if (!(navSmall === target || navSmall.contains(target))) {
        this.isMore = !this.isMore;
      }
    },
  },
  watch: {
    isMore(newValue) {
      if (newValue) {
        document.body.addEventListener("click", this.handleClickOutside);
      } else {
        document.body.removeEventListener("click", this.handleClickOutside);
      }
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
  align-items: center;
  padding: 0 1rem;
}

.nav-item {
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100%;
  background-color: var(--nav-bg-color);
  box-shadow: var(--nav-shadow);
}

.nav-item > li {
  padding: 1.5rem 2rem;
  position: relative;
}

.menu-btn {
  width: 2rem;
  height: 2rem;
}

.menu-btn > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: var(--icon-invert);
}

.on {
  background-color: var(--nav-checked-color);
}

@media (min-width: 769px) {
  .nav-small {
    display: none;
  }
}
</style>
