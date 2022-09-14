<template>
  <div>
    <input
      type="checkbox"
      id="dark-mode"
      class="toggle"
      v-model="mainStore.darkMode"
      hidden
    />
    <label for="dark-mode" class="toggleSwitch">
      <span class="toggleBtn"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { defineComponent } from "vue";
import { useStore } from "./store";

export default defineComponent({
  name: "DarkMode",
  computed: {
    ...mapStores(useStore),
  },
  updated() {
    document.documentElement.classList.toggle("dark", this.mainStore.darkMode);
  },
});
</script>

<style scoped>
.toggleSwitch {
  width: 2em;
  height: 1.2em;
  display: block;
  position: relative;
  border-radius: 2rem;
  background-color: var(--dark-mode-bg-color);
  cursor: pointer;
}

.toggleSwitch .toggleBtn {
  width: 1em;
  height: 1em;
  position: absolute;
  top: 50%;
  left: 0.1em;
  transform: translateY(-50%);
  border-radius: 50%;
  background-image: url("@/assets/img/light_mode_FILL0_wght400_GRAD0_opsz48.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--dark-mode-toggle-color);
}

.toggle:checked ~ .toggleSwitch {
  background-color: var(--dark-mode-bg-color);
}

.toggle:checked ~ .toggleSwitch .toggleBtn {
  left: calc(100% - 1.1em);
  background: var(--dark-mode-toggle-color);
  background-image: url("@/assets/img/dark_mode_FILL0_wght400_GRAD0_opsz48.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.toggleSwitch,
.toggleBtn {
  transition: all 0.2s ease-in;
}
</style>
