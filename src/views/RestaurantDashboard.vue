// ./src/views/RestaurantDashboard.vue
<template>
  <div class="container py-5">
    <!-- 個別餐廳資訊頁 RestaurantOverview-->
    <RestaurantOverview
      :restaurant="restaurant"
      :comment-count="commentCount"
      :favorite-user-count="favoriteUserCount"
    />
  </div>
</template>

<script>
import RestaurantOverview from "./../components/RestaurantOverview";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantOverview
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        viewCounts: -1,
        category: ""
      },
      commentCount: -1,
      favoriteUserCount: -1
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({
          restaurantId
        });
        console.log(data);
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          opening_hours: data.restaurant.opening_hours,
          description: data.restaurant.description,
          image: data.restaurant.image,
          viewCounts: data.restaurant.viewCounts,
          Category: data.restaurant.Category
        };
        this.commentCount = data.restaurant.Comments.length;
        this.favoriteUserCount = data.restaurant.FavoritedUsers.length;
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>