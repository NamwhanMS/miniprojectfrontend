<script setup lang="ts">
import { useRouter } from 'vue-router'
import { isLoggedIn } from '../store/auth'

const router = useRouter()


function onLogin() {
    isLoggedIn.value = false
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
                        <div class="mt-4" style="font-weight:500;">
                            <h3>Forgot password?</h3>
                        </div>
                        <div class="mt-3">
                            <p>Don't warry! it happens. Please enter the address 
                            passociated with your account</p>
                        </div>
                        
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">Email</label>
                            <input type="email" id="form2Example1" class="form-control" required/>
    
                        </div>
    
                        
                        <!-- Submit button -->
                        <div class="form-outline mb-4">
                            <button type="button" class="btn btn-login" @click="onLogin">Submit</button>
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