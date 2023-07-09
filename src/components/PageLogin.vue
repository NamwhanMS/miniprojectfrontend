<script setup lang="ts">
//import { ref } from 'vue'
import { useRouter } from 'vue-router'
//import LayoutMain from '../layouts/LayoutMain.vue'
import { isLoggedIn } from '../store/auth'

const router = useRouter()
//const message = ref('')


function onLogin() {
    isLoggedIn.value = true

    router.push('/')  
}


</script>




<template>
<div class="grid-container">
        <div class="grid-item">
            <div class="container mx-auto p-3">
                <form class="container pt-4">
                    <!-- logo -->
                    <div class="w-auto  pt-5">
                        <img class="mw-100" src="../assets/img/logo.png" style="width: 150px; height:45px;">
                        
                    </div>
                    <div class="mt-4">
                        <h3 class="fw-bold">Sign In</h3>
                    </div>
                    <div class="mt-3">
                        <p>Please login to your accouunt</p>
                    </div>
                    
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email</label>
                        <input type="email" placeholder="Enter your email address" id="form2Example1" class="form-control" required/>
                        <!--<input v-model="inputlog.email" placeholder="Enter your email address" class="form-control" type="email" required>-->
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-2">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" placeholder="Enter your password" id="form2Example1" class="form-control" required/>
                        <!--<input v-model="inputlog.password" placeholder="Enter your password" class="form-control" type="password" required>-->
                    </div>

                    <!--Forgot password-->
                    <div class="mb-4">
                        <RouterLink to="/forgotpass" class=" link-warning link-offset-2 
                        link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" >Forgot password</RouterLink>
                    </div>
                    
                    <!-- Submit button -->
                    <div class="form-outline mb-4">
                        <button type="button" class="btn btn-login" @click="onLogin">Sign in</button>
                    </div>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Don't have an account? <RouterLink to="/register" class=" link-warning link-offset-2 
                        link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" >Sign Up</RouterLink></p>
                        <p class = text-secondary>or sign up with</p>                        
                     
                        <div class="row ">
                            <div class="col d-grid ">
                                <button type="button" class="btn btn-outline-warning p-2">
                                    <img src="../assets/img/google.png" style="width: 30px; height: 30px;"> Sign Up using Google
                                </button>
                            </div>
                            <div class="col d-grid ">
                                <button type="button" class="btn btn-outline-warning ">
                                    <img src="../assets/img/facebook.png" style="width: 30px; height: 30px;"> Sign Up using Facebook
                                </button>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
          
        </div>



        <div class="grid-item">
            <img src="../assets/img/login.jpg">
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