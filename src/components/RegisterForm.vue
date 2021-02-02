<template>
  <div class="whole-content">
    <div v-if="errors.general.isGeneral" style="color: rgb(219, 84, 84)">
      {{ errors.general.message }}
    </div>
    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.name }">Name</span>
      <input
        class="form-group__field"
        v-model="name"
        name="name"
        :class="{ 'empty-error': errors.name }"
        type="text"
        placeholder="Name"
      />
    </div>

    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.surname }"
        >Surname</span
      >
      <input
        class="form-group__field"
        v-model="surname"
        name="surname"
        :class="{ 'empty-error': errors.surname }"
        type="text"
        placeholder="Surname"
      />
    </div>

    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.email }"
        >E-mail</span
      >
      <input
        class="form-group__field"
        v-model="email"
        name="email"
        :class="{ 'empty-error': errors.email }"
        type="text"
        placeholder="E-mail adress"
      />
    </div>

    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.password }"
        >Password</span
      >
      <input
        class="form-group__field"
        v-model="password"
        name="password"
        :class="{ 'empty-error': errors.password }"
        type="password"
        placeholder="Password"
      />
    </div>

    <div class="form-group">
      <span class="form-group__label" :class="{ 'empty-error': errors.password2 }"
        >Password</span
      >
      <input
        class="form-group__field"
        v-model="password2"
        :class="{ 'empty-error': errors.password2 }"
        type="password"
        placeholder="Confirm password"
      />
    </div>

    <div class="form-group">
      <span class="form-group__left"> I consent to the following agreements </span>
    </div>

    <div class="form-group">
      <input v-model="privacy" class="form-group__checkbox" type="checkbox" />
      <span class="form-group__subcontent">
        <!-- <a href="#">Privacy Policy</a> -->
        Privacy Policy
      </span>
    </div>

    <div class="form-group">
      <input v-model="terms" class="form-group__checkbox" type="checkbox" />
      <span class="form-group__subcontent">
        <!-- <a href="#">Terms and Conditions</a> -->
        Terms and Conditions
      </span>
    </div>

    <div class="form-group form-group__right">
      <button v-if="!isLoading" @click="sendRegister" class="button">Register</button>
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
      isLoading: false,
      errors: {
        general: {
          isGeneral: false,
          message: null,
        },
        name: false,
        surname: false,
        email: false,
        password: false,
        password2: false,
      },
      name: "",
      surname: "",
      email: "",
      password: "",
      password2: "",
      terms: false,
      privacy: false,
    };
  },
  computed: mapState(["token"]),
  props: {},
  methods: {
    ...mapActions(["register"]),
    async sendRegister() {
      this.isLoading = true;
      this.isLoading = true;
      this.errors.name = this.name.length == 0;
      this.errors.surname = this.surname.length == 0;
      this.errors.email = this.email.length == 0;
      this.errors.password = this.password.length == 0;
      this.errors.password2 = this.password2.length == 0;
      this.errors.general.isGeneral = false;
      if (
        !this.errors.name &&
        !this.errors.surname &&
        !this.errors.email &&
        !this.errors.password &&
        !this.errors.password2
      ) {
        if (!this.terms || !this.privacy) {
          this.errors.general.isGeneral = true;
          this.errors.general.message =
            "You must be consent to our privacy policy and terms";
        } else if (this.password !== this.password2) {
          this.errors.general.isGeneral = true;
          this.errors.general.message = "Passwords are different";
        } else {
          await this.register({
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
          });
          if (this.token.token != null) {
            this.$cookies.set("token", this.token.token);
            this.$router.push({ name: "Home" });
          } else {
            this.errors.general = true;
          }
          this.email = "";
          this.name = "";
          this.surname = "";
          this.password2 = "";
          this.password = "";
        }
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
