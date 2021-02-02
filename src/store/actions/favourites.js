import axios from "axios";
import { API_URL } from "@/common/common.js";
export default {
  async getFavourites({ commit, state }) {
    commit("startLoadingContent");
    await axios
      .get(API_URL + "favourites", {
        headers: {
          Authorization: `Bearer ${state.token.token}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(({ data }) => {
        commit("setFavourites", data);
      })
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
  async pushFavourites({ commit, state }, payload) {
    commit("startLoadingContent");
    await axios
      .post(
        API_URL + "favourites",
        { ...payload },
        {
          headers: {
            Authorization: `Bearer ${state.token.token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(({ data }) => commit("setFavourites", data))
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
  async popFavourites({ commit, state }, payload) {
    commit("startLoadingContent");
    await axios
      .delete(API_URL + `favourites/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${state.token.token}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => commit("popFavourites", { recipeId: payload.id }))
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
};
