import axios from "axios";
import { API_URL } from "@/common/common.js";
export default {
  async getLastSeen({ commit, state }) {
    commit("startLoadingContent");
    await axios
      .get(API_URL + "/lastseen", {
        headers: {
          Authorization: `Bearer ${state.token.token}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(({ data }) => {
        commit("setLastSeen", data);
      })
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
  async pushLastSeen({ commit, state }, payload) {
    commit("startLoadingContent");
    await axios
      .post(
        API_URL + "/lastseen",
        { ...payload },
        {
          headers: {
            Authorization: `Bearer ${state.token.token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(({ data }) => commit("setLastSeen", data ))
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
  async popLastSeen({ commit, state }, payload) {
    commit("startLoadingContent");
    await axios
      .delete(API_URL + `/lastseen/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${state.token.token}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => commit("popLastSeen", { recipeId: payload.id }))
      .catch((error) => commit("setError", { error }));
    commit("stopLoadingContent");
  },
};
