// ./src/views/UserFavoritedRestaurantsCard.vue
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.FavoritedRestaurants.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant in profile.FavoritedRestaurants"
        :key="restaurant.id"
        :to="{name:'restaurant',params:{id:restaurant.id}}"
      >
        <img :src="restaurant.image || emptyImage" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
export default {
  name: "UserFavoritedRestaurantsCard",
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      profile: this.initialProfile
    };
  }
};
</script>