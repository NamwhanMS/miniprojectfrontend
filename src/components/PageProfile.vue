<script setup lang="ts">
//import { ref } from 'vue'
import LayoutMain from "../layouts/LayoutMain.vue";
import userStore from "../store/user";

const user = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

function onSubmit() {
  if (user.password === user.repeatPassword) {
    console.log(user);
  } else {
    alert("Password not match");
  }
}
</script>

<template>
  <LayoutMain>
    <h3 class="fw-bold">Profile</h3>
    <p class="text-secondary">User Profile</p>

    <div class="card">
      <div class="card-body">
        <div class="profile-set">
          <div class="profile-head"></div>
          <div class="profile-top">
            <div class="profile-content">
              <div class="profile-contentname">
                <h2 class="fw-bold">{{ userStore.state.name }}</h2>
                <h4>Updates Your Personal Details.</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-6 col-sm-12 my-1">
            <div class="form-group">
              <label>Full Name</label>
              <input
                v-model="user.name"
                type="text"
                placeholder="fullname"
                fdprocessedid="u9qzsj"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 my-1">
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="user.email"
                type="text"
                placeholder="email@example.com"
                fdprocessedid="ov6n5e"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 my-1">
            <div class="form-group">
              <label>Password</label>
              <input
                v-model="user.password"
                type="text"
                placeholder="password"
                fdprocessedid="cipgr"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 my-1">
            <div class="form-group">
              <label>Repeate Password</label>
              <input
                v-model="user.repeatPassword"
                type="text"
                placeholder="Repeate password"
                fdprocessedid="kw5f8w"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-12 mt-3">
            <button
              type="button"
              class="btn btn-warning me-2"
              @click="onSubmit"
            >
              Submit
            </button>
            <botton type="button" class="btn btn-secondary">Cancel</botton>
          </div>
        </div>
      </div>
    </div>
  </LayoutMain>
</template>
