// ./src/components/NewsRestaurants.vue
<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link :to="{name:'restaurant',params:{id:restaurant.id}}">{{restaurant.name}}</router-link>
        </h4>
        <p>{{restaurant.description}}</p>
        {{restaurant.createdAt | fromNow}}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { fromNowFilter } from "./../utils/mixins";
export default {
  mixins: [fromNowFilter],
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
};
</script>