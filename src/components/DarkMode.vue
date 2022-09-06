<template>
  <div>
    <input
      type="checkbox"
      id="dark-mode"
      class="toggle"
      :checked="darkMode"
      hidden
    />
    <label for="dark-mode" class="toggleSwitch" @click="handleInput">
      <span class="toggleBtn"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DarkMode",
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.darkMode = true;
      document.documentElement.classList.toggle("dark", this.darkMode);
    }
  },
  methods: {
    handleInput() {
      this.darkMode = !this.darkMode;
    },
  },
  watch: {
    darkMode() {
      document.documentElement.classList.toggle("dark", this.darkMode);
    },
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
