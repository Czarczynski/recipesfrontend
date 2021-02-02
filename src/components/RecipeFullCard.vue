<template>
  <div class="wholeContent">
    <div v-if="!loading && !loadingContent" class="big-card">
      <div class="big-card__header">
        <fa-icons
          @click="goBack"
          class="big-card__header__title__icon"
          icon="arrow-left"
        />
        <div class="big-card__title title">{{ currentRecipe.title }}</div>
      </div>
      <div class="big-card__top-section">
        <div class="big-card__top-section__item">
          <img :src="currentRecipe.image" />
        </div>
        <div class="big-card__top-section__item">
          <div class="big-card__top-section__item__title title">Ingrediens:</div>
          <ul class="big-card__top-section__item__text ingredients">
            <li
              v-for="(ingredient, key) in currentRecipe.extendedIngredients"
              :key="key"
              class="orginal"
            >
              <p>{{ ingredient.original }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="big-card__body-item">
        <span class="big-card__body-item__title title">About:</span>
        <p class="big-card__body-item__text" v-html="currentRecipe.summary"></p>
      </div>
      <div class="big-card__body-item">
        <span class="big-card__body-item__title title">How to:</span><br />
        <p class="big-card__body-item__text">{{ currentRecipe.instructions }}</p>
      </div>
      <div class="big-card__body-item">
        <span class="big-card__body-item__title title">Detailed instructions:</span>
        <div v-if="currentRecipe.analyzedInstructions != undefined" class="recipe__steps">
          <li
            v-for="(step, key) in currentRecipe.analyzedInstructions[0].steps"
            :key="key"
            class="recipe__steps__single"
          >
            <span class="recipe__steps__single__title"> Step {{ step.number }}. </span>
            <div class="recipe__steps__single__text">
              {{ step.stepStep }}
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import obj from "@/fullRecipe.json";
import { mapState, mapActions } from "vuex";
export default {
  async mounted() {
    if (
      this.token.token != null &&
      this.token.token != "null" &&
      this.token.token != "undefined" &&
      this.token.token != undefined
    ) {
      await this.getCurrentRecipe({ recipeId: this.recipeId });

      await this.pushLastSeen({
        ...this.currentRecipe,
        recipeId: this.currentRecipe.id,
        imageUrl: this.currentRecipe.image,
        title: this.currentRecipe.title,
      });
    } else {
      this.$router.push({ name: "Home" });
    }
  },
  props: ["recipeId", "from"],
  computed: mapState(["token", "currentRecipe", "loading", "loadingContent"]),
  methods: {
    ...mapActions(["getCurrentRecipe", "pushLastSeen"]),
    goBack() {
      if (this.from.name == null) this.$router.push({ name: "Browse Recipe" });
      else if(this.from.name == "Browse Recipe") this.$router.push({ name: "Browse Recipe", params: { isBack: true } });
      else this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";

.wholeContent {
  justify-content: left;
  margin-bottom: 90px;
}

.ingredients {
  margin: 0;
  height: 330px;
  overflow-y: auto;
  box-shadow: inset 0px -40px 10px -40px $text-color;
  border-radius: 6px;
  border-bottom: 1px solid #ccc;
}
img {
  border-radius: 6px;
}

.orginal {
  text-align: left;
}

.recipe {
  &__steps {
    list-style: none;
    text-align: left;
    padding: 0 20px;
    &__single {
      margin-top: 20px;
      display: flex;
      &__title {
        font-style: italic;
        font-weight: 500;
        flex: 1;
      }
      &__text {
        flex: 10;
        padding-left: 20px;
        text-align: justify;
        & >>> a {
          color: red;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
