<script setup lang="ts">
import { reactive } from "vue";
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
//import LayoutMain from '../layouts/LayoutMain.vue'
import { isLoggedIn } from "../store/auth";
import userStore from "../store/user";
import router from "../plugins/routes";

//const router = useRouter()
//const message = ref('')


const form = reactive({
  email: "",
  password: "",
});

//function onSubmit(){
//alert(JSON.stringify(input))
// isLoggedIn.value = true
// router.push('/')
//}

async function onLogin() {
  const loginsubmit = await userStore.login(form.email, form.password);
  if (loginsubmit) {
    router.push("/");
    form.email = "";
    form.password = "";
    isLoggedIn.value = true;
  }

  // return { form, userStore, onLogin }
}
</script>

<template>
  <div class="grid-container">
    <div class="grid-item">
      <div class="container mx-auto p-3">
        <form @submit.prevent="onLogin" class="container pt-4">
          <!-- logo -->
          <div class="w-auto pt-5">
            <img
              class="mw-100"
              src="../assets/img/logo.png"
              style="width: 150px; height: 45px"
            />
          </div>
          <div class="mt-4">
            <h3 class="fw-bold">Sign In</h3>
          </div>
          <div class="mt-3">
            <p>Please login to your account</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="inputemail">Email</label>
            <input
              v-model="form.email"
              id="inputemail"
              placeholder="Enter your email address"
              class="form-control"
              type="email"
              required
            />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-2">
            <label class="form-label" for="inputpassword">Password</label>
            <input
              v-model="form.password"
              id="inputpassword"
              placeholder="Enter your password"
              class="form-control"
              type="password"
              required
            />
          </div>

          <!--Forgot password-->
          <div class="mb-4">
            <RouterLink
              to="/forgotpass"
              class="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >Forgot password</RouterLink
            >
          </div>
          <div class="text-danger my-2">{{ userStore.state.error }}</div>

          <!-- Submit button -->
          <div class="form-outline mb-4">
            <button class="btn btn-login">Sign in</button>
          </div>

          <!-- Register buttons -->
          <div class="text-center">
            <p>
              Don't have an account?
              <RouterLink
                to="/register"
                class="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >Sign Up</RouterLink
              >
            </p>
            <p class="text-secondary">or sign up with</p>

            <div class="row">
              <div class="col d-grid">
                <button type="button" class="btn btn-outline-warning p-2">
                  <img
                    src="../assets/img/google.png"
                    style="width: 30px; height: 30px"
                  />
                  Sign Up using Google
                </button>
              </div>
              <div class="col d-grid">
                <button type="button" class="btn btn-outline-warning">
                  <img
                    src="../assets/img/facebook.png"
                    style="width: 30px; height: 30px"
                  />
                  Sign Up using Facebook
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="grid-item">
      <img src="../assets/img/login.jpg" />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 40% 60%;
}

img {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}

.login-wrapper .login-content .login-logo {
  display: block;
  margin-bottom: 25px;
  max-width: 150px;
}

.btn-login {
  width: 100%;
  font-weight: 700;
  background: #ff9f43;
  border-color: #ff9f43;
  padding: 12px;
  margin-top: 15px;
  color: #fff;
}
</style>
