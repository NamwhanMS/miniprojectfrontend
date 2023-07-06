<script setup lang="ts">

interface NavItem {
  label: string
  to: string

}

const navList: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },

]
</script>



<template>
  <nav class="navbar navbar-expand navbar-light bg-light ">
    <div class="container">
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li v-for="(nav, i) of navList" :key="i" class="nav-item">
            <RouterLink class="nav-link" :to="nav.to">{{nav.label}}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   <div class="container my-4">
    <slot></slot>
   </div>
</template>


