<template>
  <div class="recipe">
    <slot />
    <fa-icons
      class="fav-icon"
      @click="changeFavourite"
      :icon="[item.isFav ? 'fas' : 'far', 'star']"
    />
    <img @click="goFullRecipe" class="recipe__image" :src="item.image" />
    <div @click="goFullRecipe" class="recipe__title">
      <span class="hyperlink">{{ item.title }}</span>
      <!-- <fa-icons :icon="['fas','star']"/>
      <fa-icons :icon="['far','star']"/> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["item"],
  methods: {
    ...mapActions(["pushFavourites", "popFavourites"]),
    async changeFavourite() {
      if (this.item.isFav) {
        if (confirm("Do you want to remove this recipe from favourites?"))
          await this.popFavourites({ id: this.item.id });
      } else {
        await this.pushFavourites({
          ...this.item,
          recipeId: this.item.id,
          imageUrl: this.item.image,
          title: this.item.title,
        });
      }
    },
    goFullRecipe() {
      this.$router.push({ name: "Recipe", params: { id: this.item.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
.fav-icon {
  position: absolute;
  padding: 5px;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: gold;
  // box-shadow:0 0 20px -9px #ccc;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.recipe {
  z-index: 1;
  position: relative;
  margin: 8px;
  // border: 1px solid $text-color;
  box-shadow: 0 0 10px -5px $text-color;
  border-radius: 12px;
  width: 230px;
  height: 280px;
  background-color: $bg-color;
  display: flex;
  flex-flow: column;
  &__title {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    flex: 2;
  }
  &__image {
    object-fit: cover;
    flex: 7;
    border-bottom: 3px solid $text-color;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
  }
  &:hover {
    margin: 2px;
    width: 242px;
    height: 292px;
    font-weight: bold;
    z-index: 2;
    elevation: 2;
    position: relative;
    cursor: pointer;
  }
}

.hyperlink:hover {
  font-weight: bold;
}

// img{
//   border-bottom: 1px solid $text-color;
//   border-top-left-radius: 12px;
//   border-top-right-radius: 12px;
//   width:100%;
//   height:100%;
// }
</style>
