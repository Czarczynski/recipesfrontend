<template>
  <div class="header">
    <div @click="goHome" class="header__title">
      <fa-icons class="header__title__icon" icon="book" />
      <h2 class="header__title__text">Search recipes</h2>
    </div>
    <div v-if="token.token == null" class="header__buttons">
      <button class="header__buttons__single" @click="goLogin">Login</button>
      <button class="header__buttons__single" @click="goRegister">
        Register
      </button>
    </div>
    <div v-else class="header__buttons">
      <button class="header__buttons__single" @click="goHome">Home</button>
      <!-- <button class="header__buttons__single" @click="goSearchRecipes">Example</button> -->
      <button class="header__buttons__single" @click="goBrowseRecepies">
        Browse recepies
      </button>
      <button class="header__buttons__single" @click="goFavourites">
        My Favourites
      </button>
      <button class="header__buttons__single" @click="goProfile">
        Profile
      </button>
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["token"]),
  data() {
    return {
      isToken: false,
    };
  },
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$store.commit("resetData");
      this.goHome();
    },
    goHome() {
      if (this.$route.path != "/") this.$router.push({ name: "Home" });
    },
    goBrowseRecepies() {
      if (this.$route.path != "/recipes")
        this.$router.push({ name: "Browse Recipe" });
    },
    goLogin() {
      if (this.$route.path != "/login") this.$router.push({ name: "Login" });
    },
    goRegister() {
      if (this.$route.path != "/login/register")
        this.$router.push({
          name: "Register",
          params: { isRegister: "register" },
        });
    },
    goProfile() {
      if (this.$route.path != "/profile")
        this.$router.push({ name: "Profile" });
    },
    goFavourites() {
      if (this.$route.path != "/favourites")
        this.$router.push({ name: "Favourites" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
.logout-button {
  min-width: 90px;
  margin-left: 30px;
  text-decoration: none;
  background-color: $bg-color;
  padding: 5px;
  font-weight: bold;
  color: $text-color;
  border: 1px solid $text-color;
  border-radius: 5px;
  &:hover {
    background-color: $text-color;
    font-weight: bold;
    color: $bg-color;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
}
.header {
  z-index: 25;
  position: fixed;
  top: 0;
  margin: 0;
  display: flex;
  height: 73px;
  padding: 0 30px;
  width: calc(100vw - 60px);
  align-items: center;
  justify-content: space-between;
  background-color: $bg-color;
  box-shadow: 0px 0px 40px -25px #000000;
  &__title {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    &__icon {
      font-size: 30px;
      padding: 10px;
    }
  }

  &__buttons {
    justify-content: flex-end;
    &__single {
      border: 0;
      min-width: 30px;
      margin-left: 20px;
      text-decoration: none;
      background-color: $bg-color;
      padding: 5px;
      font-weight: bold;
      color: $text-color;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      &:focus {
        outline: none;
      }
      &--special {
        text-decoration: underline;
      }
    }
  }
}

// .logout-button {
// border: 0;
// min-width: 90px;
// margin-left: 3px;
// text-decoration: none;
// background-color: $bg-color;
// padding: 5px;
// font-weight: bold;
// color: $text-color;
// border-radius: 5px;
// &:hover {
//   cursor: pointer;
//   text-decoration: underline;
// }
// &:focus {
//   outline: none;
// }
// }
</style>
