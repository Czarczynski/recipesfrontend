<template>
  <div>
    <RecipeFullCard :from="from" :recipeId="id" />
  </div>
</template>

<script>
import RecipeFullCard from "@/components/RecipeFullCard";
export default {
  created() {},
  props: ["id"],

  data: () => ({ from: null }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.from = from;
    });
  },
  methods: {},
  components: { RecipeFullCard },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";
</style>
