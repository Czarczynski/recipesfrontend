<template>
  <div class="whole">
    <div class="search-content">
      <div class="form-group">
        <!-- <select class="form-group__select" v-model="cuisine">
          <option
            :selected="key == 0"
            v-for="(cuisine, key) in cuisinesList"
            :key="key"
            :value="cuisine.value"
          >
            {{ cuisine.name }}
          </option>
        </select> -->
        <input
          v-model="query"
          name="search"
          class="form-group__search"
          type="email"
          placeholder="Search ..."
        />
        <!-- <button @click="getRecipes" class="form-group__search__button">
          <fa-icons class="header__title__icon" icon="search" />
        </button> -->
      </div>
    </div>
    <div class="container">
      <div class="container__result">
        <RecipeCard
          v-for="(item, key) in recipesList.filter((x) =>
            x.title.toLowerCase().includes(query.toLowerCase())
          )"
          :key="key"
          :item="{ image: item.imageUrl, id: item.recipeId, ...item, isFav: true }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard";
import { mapState, mapActions } from "vuex";
export default {
  async created() {
    if (
      this.token.token != null &&
      this.token.token != "null" &&
      this.token.token != "undefined" &&
      this.token.token != undefined
    ) {
      await this.getFavouritesRecipes();
    } else {
      this.$router.push({ name: "Home" });
    }
  },
  data() {
    return {
      cuisine: null,
      query: "",
    };
  },
  props: ["isBack"],
  methods: {
    ...mapActions(["getFavourites"]),
    async getFavouritesRecipes() {
      await this.getFavourites();
    },
  },
  computed: mapState({
    token: (state) => state.token,
    recipesList: (state) => state.user.favourites,
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
  &__search {
    width: 500px !important;
    border-radius: 6px;
  }
}

.whole {
  width: 100%;
}
.search-content {
  display: flex;
  justify-content: left;
}
.container {
  width: 100%;
  display: flex;
  justify-content: flex-start;

  &__result {
    justify-content: flex-start;
    margin-bottom: 100px;
  }
}
</style>
