<template>
  <footer class="footer-wrap">
    <div class="content-box footer-box">
      <ul>
        <li class="icon">
          <a
            href="https://github.com/wdw000"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="@/assets/img/github.svg" alt="GitHub"
          /></a>
        </li>
        <li class="icon">
          <a href="mailto:dowonwang01@gmail.com">
            <img
              src="@/assets/img/mail_FILL0_wght400_GRAD0_opsz48.svg"
              alt="Email"
            />
          </a>
        </li>
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
.footer-wrap {
  background-color: var(--footer-bg-color);
  color: var(--footer-font-color);
}
.footer-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-box ul {
  display: flex;
  align-items: center;
}
.footer-box ul > li {
  margin: 0 0.5rem;
}

.footer-box p {
  margin-top: 1rem;
}
.icon {
  background-color: var(--footer-icon-bg-color);
  width: 3rem;
  height: 3rem;
  padding: 0.1rem;
  border-radius: 3.5rem;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
