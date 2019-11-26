// ./src/views/UserFollowersCard.vue
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.Followers.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in profile.Followers"
        :key="follower.id"
        :to="{name:'user',params:{id:follower.id}}"
      >
        <img :src="follower.image || emptyImage" width="60" height="60" class="mr-1" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
export default {
  name: "UserFollowersCard",
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

