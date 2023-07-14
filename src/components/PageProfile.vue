<script setup lang="ts">
import LayoutMain from "../layouts/LayoutMain.vue";
import userStore from "../store/user";
import axios from "axios";
//import { useRouter } from "vue-router";

interface Account {
  id: number
  name: string
  email: string
  password: string
}

//fetch("/users.json")
 // .then(res => res.json())
  //.then(json =>accounts.value=json)
  
  async function getAccount() {
  const request = await fetch("/users.json");
  const response = await request.json();
  console.log(response);
  if (response) {
    const usersJson: Account = response.users;
    console.log(usersJson);
  }
}

const useraccount = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

async function onSubmit() {
  if (useraccount.password === useraccount.repeatPassword) {
    console.log(useraccount);
    let result = await axios.put("http://localhost:3000/users", {
    name: useraccount.name,
    email: useraccount.email,
    password: useraccount.password,
 });
  console.log(result);
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
               
                <h2 class="fw-bold">{{ userStore.state.email }}</h2>
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
                v-model="useraccount.name"
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
                v-model="useraccount.email"
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
                v-model="useraccount.password"
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
                v-model="useraccount.repeatPassword"
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
