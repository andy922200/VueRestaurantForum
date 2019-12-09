// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantsTopCards
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import NavTabs from "./../components/NavTabs";
import RestaurantsTopCards from "./../components/RestaurantsTopCards";

export default {
  components: {
    NavTabs,
    RestaurantsTopCards
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data, statusText } = await restaurantsAPI.getTopRestaurants();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurants = data.restaurants;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取得熱門餐廳，請稍後再試"
        });
      }
    }
  }
};
</script>