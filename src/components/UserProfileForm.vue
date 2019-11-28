// ./src/components/UserProfileForm.vue
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        v-model="profile.name"
        name="name"
        class="form-control"
        placeholder="Enter Name"
        required
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="profile.image"
        :src="profile.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    initialProfile: {
      type: Object,
      default: () => ({
        id: -1,
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        image: ""
      })
    }
  },
  created() {
    this.profile = this.initialProfile;
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files;
      if (!files.length) return; // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0]);
      this.profile.image = imageURL;
    },
    handleSubmit(e) {
      const form = e.target; //取得表單本身
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    }
  }
};
</script>