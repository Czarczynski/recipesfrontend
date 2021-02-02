<template>
  <div v-if="loading" class="page__loading">
    <ellipsis-loader color="white" />
  </div>
  <div v-else id="app">
    <Header />
    <div id="app__inner">
      <div v-if="loadingContent" id="app__loading">
        <ellipsis-loader color="white" />
      </div>
      <div class="just-a-title">{{ $route.name }}</div>
      <div id="app__inner__container">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mapState, mapActions } from "vuex";
export default {
  async created() {
    console.log({ here: "App", on: "created" });
    let token = this.$cookies.get("token");
    await this.getUser({
      token: token == "null" || token == null ? null : token,
    });
    if (token != null && token != "null") {
      await this.getFavourites();
      await this.getLastSeen();
    }
  },
  props: {},
  methods: {
    ...mapActions(["getUser", "getFavourites", "getLastSeen"]),
  },
  computed: mapState(["loading", "loadingContent"]),
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 0.4px;
  color: #2c3e50;
  height: 100vh;
  &__inner {
    // display: flex;
    width: 100%;
    margin-top: 74px;
    min-height: calc(100% - 74px);
    overflow-y: auto;
    position: relative;
    &__container {
      margin: 0 auto 100px auto;
      display: flex;
      justify-content: center;
      width: 1000px;
    }
  }
  &__loading {
    z-index: 6;
    position: fixed;
    background-color: #44444490;
    color: white;
    width: 100%;
    height: calc(100vh - 74px);
    // padding-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.page__loading {
  z-index: 3;
  position: absolute;
  background-color: #44444490;
  color: white;
  width: 100%;
  height: 100vh;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
