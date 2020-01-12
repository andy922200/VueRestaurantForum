// ./src/views/RestaurantOverview.vue
<template>
  <div class="row">
    <div class="col-md-12 mb-3" v-if="restaurant.name">
      <h1>{{restaurant.name}}</h1>
      <h5>[{{restaurant.Category.name}}]</h5>
      <hr />
      <ul>
        <li>有 {{commentCount}} 筆評論</li>
        <li>有 {{favoriteUserCount}} 人收藏這家餐廳</li>
      </ul>
      <router-link :to="{ name: 'restaurant',params:{restaurantId:restaurant.id}}">回上一頁</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true
    },
    commentCount: {
      type: Number,
      required: true
    },
    favoriteUserCount: {
      type: Number,
      required: true
    }
  }
};
</script>