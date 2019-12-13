// ./src/components/AdminRestaurantEdit.vue
<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: ""
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const {
          data: { restaurant },
          statusText
        } = await adminAPI.restaurants.getDetail({ restaurantId });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        };
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data, statusText } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        //發送完資料後跳轉
        this.$router.push({ name: "admin-restaurants" });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法建立/更新餐廳資料，請稍後再試"
        });
      }

      /* 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }*/
    }
  }
};
</script>