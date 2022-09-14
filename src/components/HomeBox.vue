<template>
  <NavBox />
  <div class="home-box">
    <h1 class="hidden">WDW's Portfolio</h1>
    <img
      v-if="mainStore.darkMode"
      class="bg"
      src="@/assets/img/home-dark.svg"
      alt="home bg"
      v-scrollAnimation
    />
    <img
      v-else
      class="bg"
      src="@/assets/img/home.svg"
      alt="home bg"
      v-scrollAnimation
    />
    <div class="ment" v-scrollAnimation>
      <p>안녕하세요</p>
      <p>신입 개발자 왕도원입니다</p>
    </div>
    <div class="scroll">
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { defineComponent } from "vue";
import NavBox from "./nav/NavBox.vue";
import { useStore } from "./store";

export default defineComponent({
  name: "HomeBox",
  components: { NavBox },
  computed: {
    ...mapStores(useStore),
  },
});
</script>

<style scoped>
.home-box {
  background-color: var(--item-bg-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bg {
  height: 40%;
}

.ment {
  margin: 1rem;
}
.ment > p {
  text-align: center;
  font-size: 1.5rem;
}
.scroll {
  position: relative;
}
.scroll span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border-left: 0.2rem solid;
  border-bottom: 0.2rem solid;
  transform: rotate(-45deg);
  animation: sdb 1.5s infinite;
}

@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(-50%, -50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg)
      translate(calc(-50% - 1.5rem), calc(-50% + 1.5rem));
    opacity: 0;
  }
}
</style>
