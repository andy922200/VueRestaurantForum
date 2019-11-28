// ./src/views/UserEdit.vue
<template>
  <div class="container py-5">
    <UserProfileForm :initial-profile="profile" />
  </div>
</template>

<script>
import UserProfileForm from "./../components/UserProfileForm.vue";

const dummyData = {
  user: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
    isAdmin: true,
    image: "https://i.imgur.com/58ImzMM.png"
  }
};

export default {
  name: "UserEdit",
  components: {
    UserProfileForm
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        image: ""
      }
    };
  },
  created() {
    const userId = this.$route.params.id;
    this.userId = Number(userId);
    this.fetchUser(userId);
  },
  methods: {
    fetchUser(userId) {
      this.profile = {
        id: dummyData.user.id,
        name: dummyData.user.name,
        email: dummyData.user.email,
        password: dummyData.user.password,
        isAdmin: dummyData.user.isAdmin,
        image: dummyData.user.image
      };
    }
  }
};
</script>