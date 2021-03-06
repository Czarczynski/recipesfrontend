import Vue from "vue";
import Vuex from "vuex";
import lastSeenActions from "./actions/lastSeen";
import favouritesActions from "./actions/favourites";
import recipesActions from "./actions/recipes";
import loggingActions from "./actions/logging";
Vue.use(Vuex);
const initialState = {
  currentRecipe: {},
  recipesList: [
    {
      id: 592479,
      title: "Kale and Quinoa Salad with Black Beans",
      image: "https://spoonacular.com/recipeImages/592479-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 547775,
      title: "Creamy Avocado Pasta",
      image: "https://spoonacular.com/recipeImages/547775-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 818941,
      title: "Avocado Toast with Eggs, Spinach, and Tomatoes",
      image: "https://spoonacular.com/recipeImages/818941-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 495111,
      title: "Citrus Sesame Kale",
      image: "https://spoonacular.com/recipeImages/495111-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 689502,
      title: "Melt In Your Mouth Kale Salad",
      image: "https://spoonacular.com/recipeImages/689502-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 582897,
      title: "Mexican Salad with Lime Dressing",
      image: "https://spoonacular.com/recipeImages/582897-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 777037,
      title: "Weekly Meal Plan #17",
      image: "https://spoonacular.com/recipeImages/777037-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 801710,
      title: "Matcha Green Tea and Pineapple Smoothie",
      image: "https://spoonacular.com/recipeImages/801710-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 695486,
      title: "Green Smoothie",
      image: "https://spoonacular.com/recipeImages/695486-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 812966,
      title: "Low Carb Frosty",
      image: "https://spoonacular.com/recipeImages/812966-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 584495,
      title: "Chopped Kale Salad with Pomegranate & Avocado",
      image: "https://spoonacular.com/recipeImages/584495-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 547899,
      title: "Sweet Potato and Black Bean Mexican Salad",
      image: "https://spoonacular.com/recipeImages/547899-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 578102,
      title: "Avocado chickpea salad (and a giveaway!)",
      image: "https://spoonacular.com/recipeImages/578102-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 696698,
      title: "Tuscan-Style Tuna Salad",
      image: "https://spoonacular.com/recipeImages/696698-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 613079,
      title: "Smashed White Bean and Avocado Sandwich",
      image: "https://spoonacular.com/recipeImages/613079-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 512226,
      title: "Creamy Broccoli Spinach Soup | A Bowl of Green",
      image: "https://spoonacular.com/recipeImages/512226-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 995889,
      title: "Low Calorie Peanut Butter Banana Spinach Smoothie",
      image: "https://spoonacular.com/recipeImages/995889-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 483531,
      title: "Black Bean and Barley Salad",
      image: "https://spoonacular.com/recipeImages/483531-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 695642,
      title: "Bean Burgers with Spicy Guacamole",
      image: "https://spoonacular.com/recipeImages/695642-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 473243,
      title: "Green Lemonade",
      image: "https://spoonacular.com/recipeImages/473243-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 677670,
      title: "Cleansing Detox Soup",
      image: "https://spoonacular.com/recipeImages/677670-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 733459,
      title: "Hummus Veggie Wrap",
      image: "https://spoonacular.com/recipeImages/733459-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 524349,
      title: "lemon garlic broccoli",
      image: "https://spoonacular.com/recipeImages/524349-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 496929,
      title: "Mango Spinach Green Smoothie",
      image: "https://spoonacular.com/recipeImages/496929-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 810865,
      title: "Simple Massaged Kale Salad with Lemon Dressing",
      image: "https://spoonacular.com/recipeImages/810865-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 588323,
      title: "Cinnamon toast crunch roasted chickpeas",
      image: "https://spoonacular.com/recipeImages/588323-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 611943,
      title: "Spinach Pesto Quinoa Bowl",
      image: "https://spoonacular.com/recipeImages/611943-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 529546,
      title:
        "Mint Chocolate Green Protein Smoothie (gluten free & can be vegan!)",
      image: "https://spoonacular.com/recipeImages/529546-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 573591,
      title: "Maple Glazed Salmon",
      image: "https://spoonacular.com/recipeImages/573591-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 480310,
      title: "Raspberry Banana Avocado Smoothie",
      image: "https://spoonacular.com/recipeImages/480310-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 578449,
      title: "Creamy avocado and rocket pasta",
      image: "https://spoonacular.com/recipeImages/578449-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 669313,
      title: "Maureen’s Avocado Tabbouleh",
      image: "https://spoonacular.com/recipeImages/669313-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 495508,
      title:
        "How to Build a Perfect Smoothie (+ a Chocolate Mint Green Smoothie !)",
      image: "https://spoonacular.com/recipeImages/495508-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 248178,
      title: "Chipotle Lime Grilled Shrimp Salad in Cilantro Lime Dressing",
      image: "https://spoonacular.com/recipeImages/248178-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 516705,
      title: "Kale Smoothie (Delicious, Healthy and Vegan!)",
      image: "https://spoonacular.com/recipeImages/516705-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 775925,
      title: "Baked Mustard-Crusted Salmon With Asparagus and Tarragon",
      image: "https://spoonacular.com/recipeImages/775925-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 505288,
      title: "Veggie Wraps with Quinoa",
      image: "https://spoonacular.com/recipeImages/505288-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 621163,
      title: "Pesto Pasta with Lemon, Spinach, Edamame & Toasted Almonds",
      image: "https://spoonacular.com/recipeImages/621163-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 550388,
      title: "Kale Salad with Cranberry Vinaigrette and Walnuts",
      image: "https://spoonacular.com/recipeImages/550388-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 538019,
      title: "Creamy Ginger Green Smoothie",
      image: "https://spoonacular.com/recipeImages/538019-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 990084,
      title: "Garlic Parmesan Broccoli",
      image: "https://spoonacular.com/recipeImages/990084-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 595916,
      title: "Spinach Strawberry Salad with Strawberry Vinaigrette",
      image: "https://spoonacular.com/recipeImages/595916-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 860943,
      title: "Garlic Parmesan Broccoli and Potatoes in Foil",
      image: "https://spoonacular.com/recipeImages/860943-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 577771,
      title: "Sexy Cabbage (+ Cilantro-Lime Carrot and Cabbage Spring Rolls)",
      image: "https://spoonacular.com/recipeImages/577771-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 496200,
      title: "Brussel Sprouts Salad with Orange Ginger Dressing",
      image: "https://spoonacular.com/recipeImages/496200-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 591705,
      title: "Tuna & White Bean Salad",
      image: "https://spoonacular.com/recipeImages/591705-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 244141,
      title: "Squash Fries",
      image: "https://spoonacular.com/recipeImages/244141-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 695118,
      title: "Tuna & White Bean Salad",
      image: "https://spoonacular.com/recipeImages/695118-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 496931,
      title: "Avocado Kale Superfood Smoothie",
      image: "https://spoonacular.com/recipeImages/496931-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 500244,
      title: "Hide Your Kale Smoothie",
      image: "https://spoonacular.com/recipeImages/500244-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 619608,
      title: "Kale and Mixed Berry Smoothie",
      image: "https://spoonacular.com/recipeImages/619608-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 509646,
      title: "Simple Herb Crusted Salmon",
      image: "https://spoonacular.com/recipeImages/509646-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 872984,
      title: "Warm Quinoa, Sweet Potato and Kale Salad",
      image: "https://spoonacular.com/recipeImages/872984-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 535969,
      title: "Kale Salad with Meyer Lemon Vinaigrette",
      image: "https://spoonacular.com/recipeImages/535969-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 584792,
      title: "Strawberry & Kale Salad with Feta Cheese",
      image: "https://spoonacular.com/recipeImages/584792-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 779803,
      title: "Falafel Salad with Lemon-Tahini Dressing",
      image: "https://spoonacular.com/recipeImages/779803-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 588576,
      title: "Creamy 3 herb dressing",
      image: "https://spoonacular.com/recipeImages/588576-312x231.png",
      imageType: "png",
    },
    {
      id: 584854,
      title: "Chopped Kale Salad with Grapes & Feta Cheese",
      image: "https://spoonacular.com/recipeImages/584854-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 616564,
      title: "Chinese Chop Salad + Peanut Sesame Dressing",
      image: "https://spoonacular.com/recipeImages/616564-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 483676,
      title: "Salted Chocolate Oatmeal Smoothie",
      image: "https://spoonacular.com/recipeImages/483676-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 15076,
      title: "Kale-apple Smoothie",
      image: "https://spoonacular.com/recipeImages/15076-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 500830,
      title: "Rainbow Chard Hummus Wraps",
      image: "https://spoonacular.com/recipeImages/500830-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 588548,
      title: "Cold buster smoothie",
      image: "https://spoonacular.com/recipeImages/588548-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 495223,
      title: "Pesto Quinoa & White Bean Cakes with Roasted Tomatoes",
      image: "https://spoonacular.com/recipeImages/495223-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 724675,
      title: "Quinoa Avocado Spinach Power Salad",
      image: "https://spoonacular.com/recipeImages/724675-312x231.png",
      imageType: "png",
    },
    {
      id: 473967,
      title: "Asian Sesame Spinach Salad (Power Foods)",
      image: "https://spoonacular.com/recipeImages/473967-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 548436,
      title: "Grilled Guacamole",
      image: "https://spoonacular.com/recipeImages/548436-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 238176,
      title: "Greek Potatoes (Oven-Roasted and Delicious!)",
      image: "https://spoonacular.com/recipeImages/238176-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 592292,
      title: "Marinated White Beans",
      image: "https://spoonacular.com/recipeImages/592292-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 482512,
      title: "Chocolate Espresso Protein Smoothie",
      image: "https://spoonacular.com/recipeImages/482512-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 539858,
      title: "Raw Kale Salad with Apples, Carrots & Purple Cabbage",
      image: "https://spoonacular.com/recipeImages/539858-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 622596,
      title: "Whole30 grilled salmon with avocado salsa",
      image: "https://spoonacular.com/recipeImages/622596-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 45285,
      title: "Baked Sweet Potato Falafel Recipe",
      image: "https://spoonacular.com/recipeImages/45285-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 15123,
      title: "Raw Tuscan Kale Salad",
      image: "https://spoonacular.com/recipeImages/15123-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 1009573,
      title: "Quinoa Kale Tomato Corn Salad",
      image: "https://spoonacular.com/recipeImages/1009573-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 548450,
      title: "Sweet Potato Kale Pizza with Rosemary & Red Onion",
      image: "https://spoonacular.com/recipeImages/548450-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 515839,
      title: "Green Juice in a Blender",
      image: "https://spoonacular.com/recipeImages/515839-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 756829,
      title: "Spinach and Mushroom Egg White Frittata",
      image: "https://spoonacular.com/recipeImages/756829-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 677365,
      title: "Lentil Spinach Salad with Avocado",
      image: "https://spoonacular.com/recipeImages/677365-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 264116,
      title: "Butternut Squash Soup",
      image: "https://spoonacular.com/recipeImages/264116-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 511867,
      title: "Lentil & Mushroom Ragu",
      image: "https://spoonacular.com/recipeImages/511867-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 584594,
      title: "Vegetable Stir-Fry with Endive & Shiitake Mushrooms",
      image: "https://spoonacular.com/recipeImages/584594-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 482628,
      title: "Banana Berry Kale Smoothie",
      image: "https://spoonacular.com/recipeImages/482628-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 612082,
      title: "Creamy Butternut Squash Pasta Skillet",
      image: "https://spoonacular.com/recipeImages/612082-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 974620,
      title: "Kale Pineapple Smoothie",
      image: "https://spoonacular.com/recipeImages/974620-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 563797,
      title: "Roasted Red Pepper Butternut Squash Noodles with Chicken",
      image: "https://spoonacular.com/recipeImages/563797-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 842383,
      title: "Roasted Cauliflower Salad with Lemon Tahini Dressing",
      image: "https://spoonacular.com/recipeImages/842383-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 551703,
      title: "Quinoa Lentil Salad - Roasted Brussels Sprouts",
      image: "https://spoonacular.com/recipeImages/551703-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 496225,
      title: "Super Simple Roasted Broccoli",
      image: "https://spoonacular.com/recipeImages/496225-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 500803,
      title: "Three Color Pasta with Sun Dried Tomato Sauce",
      image: "https://spoonacular.com/recipeImages/500803-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 588272,
      title: "Spicy thai carrot and kale salad",
      image: "https://spoonacular.com/recipeImages/588272-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 559162,
      title: "Roasted Potatoes With Garlic Sauce",
      image: "https://spoonacular.com/recipeImages/559162-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 536055,
      title: "Garlic Mushroom Quinoa",
      image: "https://spoonacular.com/recipeImages/536055-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 38231,
      title: "Crispy Parmesan Asparagus Sticks",
      image: "https://spoonacular.com/recipeImages/38231-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 578138,
      title: "Quick black bean dip",
      image: "https://spoonacular.com/recipeImages/578138-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 556911,
      title: "Chocolate Peanut Butter Protein Shake",
      image: "https://spoonacular.com/recipeImages/556911-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 488633,
      title: "gobi pakora , how to make gobi pakoras or cauliflower fritters",
      image: "https://spoonacular.com/recipeImages/488633-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 677524,
      title: "Chicken Tortilla Soup",
      image: "https://spoonacular.com/recipeImages/677524-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 814122,
      title: "Massaged Kale Salad with Avocado and Pickled Red Onions",
      image: "https://spoonacular.com/recipeImages/814122-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 780510,
      title: "Zucchini Noodles with Creamy Avocado Pesto",
      image: "https://spoonacular.com/recipeImages/780510-312x231.jpg",
      imageType: "jpg",
    },
  ],
  loading: false,
  loadingContent: false,
  error: null,
  token: { token: null, expiresIn: null },
  user: {
    email: null,
    name: null,
    surname: null,
    lastSeen: [],
    favourites: [],
  },
};
const store = new Vuex.Store({
  state: initialState,
  mutations: {
    startLoading: (state) => (state.loading = true),
    stopLoading: (state) => (state.loading = false),
    startLoadingContent: (state) => (state.loadingContent = true),
    stopLoadingContent: (state) => (state.loadingContent = false),
    resetError: (state) => (state.error = null),
    setError: (state, payload) => (state.error = payload.error),
    setToken: (state, payload) => (state.token.token = payload.token),
    setFavourites: (state, payload) => {state.user.favourites = [...payload];},
    popFavourites: (state, payload) =>
      (state.user.favourites = [...state.user.favourites.filter(
        (x) => x.recipeId != payload.recipeId
      )]),
    setLastSeen: (state, payload) => (state.user.lastSeen = [...payload]),
    popLastSeen: (state, payload) =>
      (state.user.lastSeen = [...state.user.lastSeen.filter(
        (x) => x.recipeId != payload.recipeId
      )]),
    resetData(state) {
      state.token = { token: null, expiresIn: null };
      state.user = initialState.user;
      state.recipesList = initialState.recipesList;
    },
    setData(state, payload) {
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.user.surname = payload.user.surname;
      state.token.token = payload.token;
      state.token.expiresIn = payload.expiresIn;
    },
    setRecipesList(state, payload) {
      state.recipesList = payload;
    },
    setCurrentRecipe(state, payload) {
      state.currentRecipe = payload;
    },
  },
  actions: {
    ...favouritesActions,
    ...recipesActions,
    ...lastSeenActions,
    ...loggingActions
  },
});

export default store;
