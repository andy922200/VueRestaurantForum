// ./src/views/CreateComment.vue
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import commentAPI from "./../apis/comment";
import { Toast } from "../utils/helpers";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.text) {
        Toast.fire({
          icon: "error",
          title: "請檢查欄位是否空白"
        });
        return;
      }
      try {
        const { data, statusText } = await commentAPI.postComment({
          restaurantId: this.restaurantId,
          text: this.text
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        });
        this.text = "";
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試"
        });
      }
    }
  }
};
</script>