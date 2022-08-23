<template>
  <footer class="footer-box">
    <div class="content-box">
      <ul>
        <li>git</li>
        <li>email</li>
      </ul>
      <p>Thank you for visiting my portfolio</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterBox",
});
</script>

<style scoped>
.footer-box {
  background-color: #0f0f0f;
  color: white;
}
</style>
