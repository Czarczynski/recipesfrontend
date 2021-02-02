<template>
  <div>
    <div class="search-content">
      <div class="form-group">
        <select class="form-group__select" v-model="cuisine">
          <option
            :selected="key == 0"
            v-for="(cuisine, key) in cuisinesList"
            :key="key"
            :value="cuisine.value"
          >
            {{ cuisine.name }}
          </option>
        </select>
        <input
          v-model="query"
          name="search"
          class="form-group__search"
          type="email"
          placeholder="Search ..."
        />
        <button @click="getRecipes" class="form-group__search__button">
          <fa-icons class="header__title__icon" icon="search" />
        </button>
      </div>
    </div>
    <div class="container">
      <div class="container__result">
        <RecipeCard
          v-for="(item, key) in recipesList"
          :key="key"
          :item="{...item, isFav: favList.includes(item.id)}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import cuisinesList from "@/cuisines.json";
import RecipeCard from "@/components/RecipeCard";
import { mapState, mapActions } from "vuex";
export default {
  async created() {
    console.log({ here: "Browse Recipe", on: "created" });
    if (
      this.token.token != null &&
      this.token.token != "null" &&
      this.token.token != "undefined" &&
      this.token.token != undefined
    ) {
      if (!this.isBack) {
        await this.getRecipes();
      }
    } else {
      this.$router.push({ name: "Home" });
    }
  },
  data() {
    return {
      cuisinesList,
      cuisine: null,
      query: null,
    };
  },
  props: ["isBack"],
  methods: {
    ...mapActions(["getRecipesList"]),
    async getRecipes() {
      await this.getRecipesList({ cuisine: this.cuisine, query: this.query });
    },
  },
  computed: mapState({
    recipesList: (state) => state.recipesList,
    token: (state) => state.token,
    favList: (state) => state.user.favourites.map(({ recipeId }) => recipeId),
  }),
  components: { RecipeCard },
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
.form-group {
  justify-content: center;
  display: flex;
  &__select {
    text-align-last: center;
    margin-right: 20px;
    font-family: inherit;
    border: 1px solid $text-color;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    width: 200px;
    appearance: none;
    &:focus {
      outline: none;
      border: 0 0 0 1px;
      box-shadow: 0 0 1px 1px $text-color;
    }
  }
}

.search-content {
  display: flex;
  justify-content: center;
}
.container__result {
  margin-bottom: 100px;
}
</style>
