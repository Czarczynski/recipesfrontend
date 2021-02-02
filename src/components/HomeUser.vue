<template>
  <div>
    <div class="big-card">
      <div class="big-card__top-section">
        <div class="big-card__title">
          Recommended
          <div class="big-card__title__small">(still in progress)</div>
        </div>

        <div class="big-card__top-section__card">
          <recipe v-for="(item, key) in recommended " :key="key" :item="{image: item.imageUrl, ...item, isFav: favList.includes(item.recipeId)}"/>
        </div>
      </div>
    </div>

    <div class="big-card">
      <div class="big-card__top-section">
        <div class="big-card__title">Favourites</div>
        <span class="small-link" @click="goFavourites">See all</span>
      </div>

      <div class="big-card__top-section__card">
        <recipe v-for="(item, key) in favourites.slice(0, 4) " :key="key" :item="{image: item.imageUrl, id:item.recipeId, ...item, isFav: true}"/>
      </div>
    </div>

    <div class="big-card">
      <div class="big-card__top-section">
        <div class="big-card__title">History</div>
        <span class="small-link" @click="goHistory">See all</span>
      </div>

      <div class="big-card__top-section__card">
        <recipe
          v-for="(item, key) in lastSeen.slice(0, 4)"
          :key="key"
          :item="{ image: item.imageUrl, id:item.recipeId, ...item, isFav: favList.includes(item.recipeId) }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";
import { mapState, mapActions } from "vuex";
import recommended from "@/recRecipes.json"
export default {
  async created() {
    await this.getFavourites();
    await this.getLastSeen();
    
  
  },
  data: () => ({ loading: true, recommended }),
  methods: {
    ...mapActions(["getFavourites", "getLastSeen"]),
    goFavourites(){
      this.$router.push({name:"Favourites"});
    },
    goHistory(){
      this.$router.push({name:"History"});
    }
  },
  components: {
    recipe: RecipeCard,
  },
  computed: mapState({
    favourites: (state) => state.user.favourites,
    lastSeen: (state) => state.user.lastSeen,
    favList: (state) => state.user.favourites.map(({ recipeId }) => recipeId)
  }),
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
.small-link{
  text-decoration: underline;
  &:hover{
    cursor: pointer;
  }
}
.big-card {
  min-width: 1000px;
  margin:  0 20px 20px 20px;
  &__title {
    display: flex;
    justify-content: left;
    &__small {
      font-size: 8px;
      margin: 2px;
    }
  }
  &__top-section {
    &__card {
      display: flex;
    }
  }
}
</style>
