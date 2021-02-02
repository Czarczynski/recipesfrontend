<template>
<div class="around">
  <div class="card">
    <div class="card__header">
      <div
        class="card__header__button"
        :class="{ active: currentTab == 'login' }"
        @click="currentTab = 'login'"
      >
        Login
      </div>
      <div
        class="card__header__button"
        :class="{ active: currentTab == 'register' }"
        @click="currentTab = 'register'"
      >
        Register
      </div>
    </div>
    <div class="card__body">
      <component :is="currentTab" />
    </div>
  </div>
</div>
</template>

<script>
import Register from "@/components/RegisterForm";
import Login from "@/components/LoginForm";
export default {
  created() {
    this.checkPage();
  },
  data() {
    return {
      currentTab: "login",
    };
  },
  props: ["isRegister"],
  methods: {
    checkPage() {
      this.currentTab = this.isRegister == "register" ? "register" : "login";
    },
  },
  watch: {
    isRegister: "checkPage",
  },
  components: {
    login: Login,
    register: Register,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
.around{
    display: flex;
    justify-content: center;
    padding-top: 30px;
    width:100%;
}
</style>
