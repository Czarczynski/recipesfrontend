<template>
  <div class="whole">
    <div class="search-content">
      <div class="form-group">
        <input
          v-model="query"
          name="search"
          class="form-group__search"
          type="email"
          placeholder="Search ..."
        />
      </div>
    </div>
    <div class="container">
      <div class="container__result">
        <RecipeCard
          v-for="(item, key) in recipesList.filter((x) =>
            x.title.toLowerCase().includes(query.toLowerCase())
          )"
          :key="key"
          :item="{
            image: item.imageUrl,
            id: item.recipeId,
            ...item,
            isFav: favList.includes(item.recipeId),
          }"
        >
          <fa-icons @click="removeFromHistory(item.recipeId)" icon="times" class="remove-icon" />
        </RecipeCard>
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
      await this.getLastSeenRecipes();
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
    ...mapActions(["getFavourites", "getLastSeen", "popLastSeen"]),
    async removeFromHistory(id) {
        if (confirm("Do you want to remove this recipe from history?"))
          await this.popLastSeen({ id });
    },
    async getLastSeenRecipes() {
      await this.getLastSeen();
      await this.getFavourites();
    },
  },
  computed: mapState({
    token: (state) => state.token,
    recipesList: (state) => state.user.lastSeen,
    favList: (state) => state.user.favourites.map(({ recipeId }) => recipeId),
  }),
  components: { RecipeCard },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
.remove-icon {
  position: absolute;
  padding: 5px 8px;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #FF4136;
  background-color: rgba(0, 0, 0, 0.5);
  // box-shadow:0 0 20px -9px #ccc;
  border-radius: 6px;
  z-index: 3;
}
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
