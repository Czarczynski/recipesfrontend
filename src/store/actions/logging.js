import axios from "axios";
import { API_URL } from "@/common/common.js";

export default {
  async login({ commit }, payload) {
    commit("resetError");
    await axios
      .post(
        API_URL + "auth",
        {
          email: payload.email,
          password: payload.password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(({ data }) => {
        commit("setData", { ...data });
      })
      .catch((error) => {
        return error;
      });
  },
  async register({ commit }, payload) {
    commit("resetError");
    await axios
      .post(
        API_URL + "users",
        {
          ...payload,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(({ data }) =>
        commit("setData", { token: payload.token, user: data.user })
      )
      .catch((error) => commit("setError", { error }));
  },
  async getUser({ commit }, payload) {
    commit("resetError");
    commit("startLoading");
    if (
      payload.token == null ||
      payload.token == "undefined" ||
      payload.token == undefined
    ) {
      commit("resetData");
    } else {
      await axios
        .get(API_URL + "users", {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        })
        .then(({ data }) =>
          commit("setData", { token: payload.token, user: data.user })
        )
        .catch((error) => commit("setError", { error }));
    }
    commit("stopLoading");
  },
};
