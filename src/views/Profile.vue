<template>
  <div v-if="!loadingContent">
    <div class="big-card">
      <div class="big-card__title">
        <span>Profile informations</span>
        <div>
          <span @click="goFavourites" class="small-link">Favourites</span>
          <span @click="goHistory" class="small-link">History</span>
        </div>
      </div>
      <div class="big-card__content">
        <!-- <div class="big-card__content__details"> -->
        <div class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" icon="user" />
            <div class="big-card__content__details__title">Name:</div>
          </div>
          <div class="whole__right">
            {{ user.name }}
          </div>
        </div>
        <div class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" icon="user" />
            <div class="big-card__content__details__title">Surname:</div>
          </div>
          <div class="whole__right">
            {{ user.surname }}
          </div>
        </div>
        <div class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" icon="at" />
            <div class="big-card__content__details__title">Email:</div>
          </div>
          <div class="whole__right">
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="big-card__title">Change password</div>
      <div class="big-card__content">
        <div class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" icon="lock" />
            <div class="big-card__content__details__title">Old password:</div>
          </div>
          <div class="whole__right">
            <input class="big-card__content__details__password" type="password" />
          </div>
        </div>
        <div class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" icon="unlock" />
            <div class="big-card__content__details__title">New password:</div>
          </div>
          <div class="whole__right">
            <input class="big-card__content__details__password" type="password" />
          </div>
        </div>
        <div class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" icon="unlock" />
            <div class="big-card__content__details__title">Confirm password:</div>
          </div>
          <div class="whole__right">
            <input class="big-card__content__details__password" type="password" />
          </div>
        </div>
      </div>
      <div class="big-card__button">
        <button class="button" value="Confirm">Confirm</button>
      </div>
    </div>

    <div class="big-card">
      <div class="big-card__title">Preferences</div>
      <div class="big-card__selector">
        <div v-for="(pref, key) in prefs" :key="key" class="whole">
          <div class="whole__left">
            <fa-icons class="big-card__content__details__icon" :icon="pref.icon" />
            <div class="big-card__content__details__title">{{ pref.name }}</div>
          </div>
          <div class="whole__right">
            <div class="big-card__selector__element__choose">
              <div>
                <label>
                  <input
                    type="radio"
                    v-model="pref.isOn"
                    :value="true"
                    :name="pref.name"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    v-model="pref.isOn"
                    :value="false"
                    :name="pref.name"
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    v-model="pref.isOn"
                    :value="null"
                    :name="pref.name"
                  />
                  No matter
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      prefs: [
        { name: "Vegan", isOn: null, icon: "seedling" },
        { name: "Vegetarian", isOn: null, icon: "egg" },
        { name: "Gluten", isOn: null, icon: "bread-slice" },
        { name: "Dairy", isOn: null, icon: "glass-whiskey" },
        { name: "Cheap", isOn: null, icon: "wallet" },
        { name: "Sustainable", isOn: null, icon: "balance-scale" },
      ],
    };
  },
  props: {},
  computed: mapState(["user", "loadingContent"]),
  methods: {
    goFavourites() {
      this.$router.push({ name: "Favourites" });
    },
    goHistory() {
      this.$router.push({ name: "History" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";

.small-link {
  text-decoration: underline;
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
}
.big-card {
  min-width: 1000px;
  margin: 0 20px 20px 20px;
  &__title {
    display: flex;
    justify-content: space-between;
  }
  &__button {
    display: flex;
    margin: 10px;
  }
  &__selector {
    margin: 10px;
    padding: 5px;
    &__element {
      width: 400px;
      display: flex;
      justify-content: space-between;
      margin: 10px;
      padding: 5px;
      // display: flex;
      // justify-content: left;
      &__desc {
        font-weight: bold;
      }
      &__choose {
        left: 500px;
      }
    }
  }
  &__content {
    margin: 10px;
    padding: 5px;
    &__details {
      display: flex;
      margin: 10px;
      padding: 5px;
      &__title {
        padding-right: 5px;
        font-weight: bold;
      }
      &__icon {
        padding-right: 5px;
      }
      &__password {
        border-radius: 6px;
      }
    }
  }
}
.whole {
  padding: 10px 15px;
  display: flex;
  width: 450px;
  text-align: left;
  &__left {
    flex: 1;
    display: flex;
  }
  &__right {
    flex: 1;
  }
}
</style>
