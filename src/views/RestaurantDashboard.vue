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

const dummyData = {
  restaurant: {
    id: 1,
    name: "Laurence Reynolds",
    tel: "1-657-067-3756 x9782",
    address: "187 Kirlin Squares",
    opening_hours: "08:00",
    description: "sit est mollitia",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
    viewCounts: 36,
    createdAt: "2019-07-30T16:24:55.432Z",
    updatedAt: "2019-09-27T14:24:19.856Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    Comments: [
      {
        id: 1,
        text: "Sed dolores labore.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.451Z",
        updatedAt: "2019-07-30T16:24:55.451Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z"
        }
      },
      {
        id: 51,
        text: "Quas accusamus sint blanditiis enim eveniet aliquam vel.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.452Z",
        updatedAt: "2019-07-30T16:24:55.452Z",
        User: {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z"
        }
      },
      {
        id: 101,
        text: "Ipsa vitae voluptas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.453Z",
        updatedAt: "2019-07-30T16:24:55.453Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z"
        }
      }
    ]
  }
};

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
  methods: {
    fetchRestaurant(restaurantId) {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        opening_hours: dummyData.restaurant.opening_hours,
        description: dummyData.restaurant.description,
        image: dummyData.restaurant.image,
        viewCounts: dummyData.restaurant.viewCounts,
        Category: dummyData.restaurant.Category
      };
      this.commentCount = dummyData.restaurant.Comments.length;
      this.favoriteUserCount = -1;
    }
  }
};
</script>