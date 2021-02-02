<template>
  <footer class="footer">
    <span class="footer__content"
      >© 2021
      <a href="https://www.linkedin.com/in/mateusz-czarczyński-1263a5173/" target="_blank"
        >Mateusz Czarczyński</a
      >
      &amp;
      <a href="https://www.linkedin.com/in/wiktor-gregorczyk-7943a4173/" target="_blank"
        >Wiktor Gregorczyk</a
      >. All rights reserved.</span
    >
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
a {
  text-decoration: none;
  color: $text-color;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
}
.footer {
  display: flex;
  align-items: center;
  background-color: $bg-color;
  bottom: 0;
  position: absolute;
  left: 0;
  padding: 20px;
  width: calc(100% - 40px);
  overflow: hidden;
  &__title {
    display: flex;
    align-items: center;
    &__icon {
      font-size: 30px;
      padding: 10px;
    }
  }
}
</style>
