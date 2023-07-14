<script setup lang="ts">
import { useRouter } from "vue-router";
//import { isLoggedIn } from '../store/auth';
import userStore from '../store/user';

const router = useRouter();

//interface NavItem {
 // label: string
 // to: string
 // show: boolean
//}

//const navList: NavItem[] =[
 // { label: 'Home', to: '/', show:true },
 // { label: 'Profile', to: '/profile', show: isLoggedIn.value},
 // { label: 'Login', to: '/login', show: !isLoggedIn.value},
  //{ label: 'Register', to: '/register', show: !isLoggedIn.value },

//]

function logout(){
  localStorage.clear();
  router.push("/login");
}


</script>



<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
 
    <div class="container">
    <RouterLink class="navbar-brand" to="/">
        <img src="https://dreamspos.dreamguystech.com/html/template/assets/img/logo.png"
      style="width: 140px; height: 43px;">
    </RouterLink>
   
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNav">
      <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <RouterLink class="nav-link" to="/setting">Setting</RouterLink>
        </li>
        
        <li class="nav-item dropdown ">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
              <ul class="dropdown-menu">
                <li><RouterLink class="dropdown-item" to="/profile">My Profile</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/setting">Setting</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click="logout">Log out</a></li>
                
              </ul>
            </li>           
      </ul>
    </div>
  </div>
</nav>
 <!--sidebar-->
 <div class="d-flex flex-row">

  <div class="mx-auto w-15">
    
    <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
     <p>Main</p> 
     <div class="ms-3 p-1 ">
      <RouterLink class="nav-link" to="/">Dashboard</RouterLink>
     </div>  
     
     <div class="border-top my-2"></div>

     <p>Management</p> 
     <div class="ms-3 p-1 ">
      <RouterLink class="nav-link" to="/">Student Data</RouterLink>
     </div>
     <div class="ms-3 p-1 ">
      <RouterLink class="nav-link" to="/">Create Student Data</RouterLink>
     </div>
     
    <ul class="list-unstyled ps-0">
      
      <li class="border-top my-2"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse" style="text-decoration: none;">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><RouterLink to="/register" class="link-dark rounded">New...</RouterLink></li>
            <li><RouterLink to="/profile" class="link-dark rounded">Profile</RouterLink></li>
            <li><RouterLink to="/setting" class="link-dark rounded">Settings</RouterLink></li>
            <li><RouterLink to="/loginpage" class="link-dark rounded" @click="userStore.logout()">Sign out</RouterLink></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>


  </div>

  <div class="mx-auto w-75">
   <div class="container mt-3">
      <slot></slot>
    </div>
  </div>


 </div>

 
 


</template>


<style>


</style>