<template>
  <div v-if="token.token != null">
    <HomeUser />
  </div>
  <div v-else class="big-card">
    <div class="big-card__title title">Search recipes - your solution for hunger.</div>
    <div class="big-card__body-item">
      <div class="big-card__top-section__item__title title">
        Search recipes is a new site that contains 12.000+ recipes from around the world.
      </div>
      <div class="big-card__body-item__text">
        If you're looking for place to find what to eat, you don't need to look no more.
        We gather with card most popular recipes from every chef and cooking passionate to
        share it for free with other people that love to taste the world. With that amount
        of recipes you will surprise your friends with your cooking skills. We have done
        our best to describe what you need to do as best we could, by that every meal is
        easy and clear to prepare.
      </div>
    </div>
    <div class="big-card__body-item">
      <div class="big-card__top-section__item__title title">
        Benefits of joining our site.
      </div>
      <div class="big-card__body-item__text">
        <ul>
          <li>
            You can set up your preferences, and there will be proposed recipes you are
            suitable with.
          </li>
          <li>Save in your history what were looking for.</li>
          <li>Add your favourite recipes for later to not forget them.</li>
          <li>Access to print every recipe.</li>
        </ul>
      </div>
    </div>
    <div class="big-card__body-item">
      <div class="big-card__top-section__item__title title">
        Don't waste your time searching for new recipe we have everything You need.
        <span class="big-card__top-section__item__title__redirect" @click="goRegister"
          >Join us.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeUser from "@/components/HomeUser";
export default {
  computed: mapState(["token", "user"]),
  methods: {
    goRegister() {
      this.$router.push({ name: "Register", params: { isRegister: "register" } });
    },
  },
  components: { HomeUser },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";

.big-card__top-section__item__title__redirect {
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
}
</style>
