<script setup lang="ts">
import { isLoggedIn } from '../store/auth';

interface NavItem {
  label: string
  to: string
  show: boolean
}

const navList: NavItem[] =[
  { label: 'Home', to: '/', show:true },
  { label: 'Profile', to: '/profile', show: isLoggedIn.value},
  { label: 'Login', to: '/login', show: !isLoggedIn.value},
  { label: 'Register', to: '/register', show: !isLoggedIn.value },

]
</script>



<template>
  <nav class="navbar navbar-expand navbar-light bg-light ">
    <div class="container">
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <template v-for="(nav, i) of navList" :key="i">
            <li v-if="nav.show" class="nav-item">
            <RouterLink class="nav-link" :to="nav.to">{{nav.label}}</RouterLink>
            </li>
          </template>
          <li>
            <span class = "nav-link">Logged in?: {{ isLoggedIn }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
   <div class="container my-4">
    <slot></slot>
   </div>
</template>


