import axios from "axios";
import { API_URL } from "@/common/common.js";
export default {async getCurrentRecipe({ commit, state }, payload) {
    commit("startLoadingContent");
    commit("resetError");
    await axios
      .get(API_URL + `recipes/${payload.recipeId}`, {
        headers: {
          Authorization: `Bearer ${state.token.token}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(({ data }) => commit("setCurrentRecipe", { ...data }))
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
  async getRecipesList({ commit, state }, payload) {
    commit("startLoadingContent");
    commit("resetError");
    await axios
      .post(
        API_URL + "recipes",
        { ...payload },
        {
          headers: {
            Authorization: `Bearer ${state.token.token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(({ data }) => commit("setRecipesList", { ...data }))
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },}