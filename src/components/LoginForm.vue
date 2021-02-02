<template>
  <div class="whole-content">
    <div v-if="errors.general" style="color: rgb(219, 84, 84)">
      Wrong email or password
    </div>
    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.email }"
        >E-mail</span
      >
      <input
        v-model="email"
        name="email"
        class="form-group__field"
        type="email"
        placeholder="E-mail adress"
        :class="{ 'empty-error': errors.email }"
      />
    </div>

    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.password }"
        >Password</span
      >
      <input
        :class="{ 'empty-error': errors.password }"
        v-model="password"
        class="form-group__field"
        type="password"
        name="password"
        placeholder="Password"
      />
    </div>

    <div class="form-group">
      <input
        v-model="rememberMe"
        id="remember"
        class="form-group__checkbox"
        type="checkbox"
      />
      <label for="remember" class="form-group__subcontent">Remember me</label>
    </div>

    <div class="form-group form-group__right">
      <button v-if="!isLoading" @click="sendLogin" class="button">Login</button>
      <button v-else class="button-like">
        <ellipsis-loader class="loading" color="#4e5e6e" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {},
  data() {
    return {
      rememberMe: false,
      errors: {
        general: false,
        email: false,
        password: false,
      },
      email: "",
      password: "",
      isLoading: false,
    };
  },
  props: {},
  computed: mapState(["token"]),
  methods: {
    ...mapActions(["login"]),
    async sendLogin() {
      this.isLoading = true;
      this.errors.password = this.password.length == 0;
      this.errors.email = this.email.length == 0;
      this.errors.general = false;
      if (!this.errors.email && !this.errors.password) {
        await this.login({
          email: this.email,
          password: this.password,
        });
        if (this.token.token != null) {
          if (this.rememberMe) {
            this.$cookies.set("token", this.token.token, this.token.expiresin * 60);
          } else {
            this.$cookies.set("token", this.token.token);
          }
          this.$router.push({ name: "Home" });
        } else {
          this.errors.general = true;
        }
        this.email = "";
        this.password = "";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
.loading {
  position: sticky;
  width: 80px !important;
  height: 20px !important;

  top: -31px;
}
</style>
