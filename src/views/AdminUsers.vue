// ./src/views/AdminUsers.vue
<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td v-if="currentUser.id !== user.id">
            <button
              type="button"
              v-if="user.isAdmin"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >set as user</button>
            <button
              type="button"
              v-else
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
const dummyData = {
  users: [
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea",
      isAdmin: false,
      image: null,
      createdAt: "2019-11-20T06:25:42.909Z",
      updatedAt: "2019-11-20T06:25:42.909Z"
    },
    {
      id: 4,
      name: "lib8186",
      email: "lib3@example.com",
      password: "$2a$10$rjYLC02gZK3Ry2/.sPFfqeF02C7mQjKc5vDcybqDVlvYSw96lepda",
      isAdmin: true,
      image: null,
      createdAt: "2019-11-20T06:37:12.860Z",
      updatedAt: "2019-11-20T06:48:50.976Z"
    },
    {
      id: 5,
      name: "lib4",
      email: "lib4@example.com",
      password: "$2a$10$wgBCTWhLICljONe9dThbB.IQYVrg0yo6ryzQfQIGXQWrUVx0y5gbq",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:25:42.952Z",
      updatedAt: "2019-11-20T07:25:42.952Z"
    }
  ]
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
    isAdmin: true,
    image: "https://i.imgur.com/58ImzMM.png"
  }
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      currentUser: {
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
    this.fetchUser();
    this.currentUser = dummyUser.currentUser;
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
    },
    toggleUserRole(userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) return user;
        if (user.isAdmin === true) {
          return {
            ...user,
            isAdmin: false
          };
        } else {
          return {
            ...user,
            isAdmin: true
          };
        }
      });
    }
  }
};
</script>