<script setup lang="ts">
import LayoutMain from '../layouts/LayoutMain.vue'





</script>

<template>
  <LayoutMain>
    <div class="container px-4 py-4" id="featured-3">
      <h1 class="pb-2 border-bottom">Dashboard</h1>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          
          <h3 class="fs-2 text-body-emphasis">Student Data</h3>
          <p>View Student data</p>
          <RouterLink to="/studata" class="icon-link">
            View Student data
            <svg class="bi">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </RouterLink>
        </div>
        <div class="feature col">
          
          <h3 class="fs-2 text-body-emphasis">Create Student Data</h3>
          <p>Create new student data</p>
          <RouterLink to="/addstu" class="icon-link">
            Create Student Data
            <svg class="bi">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </RouterLink>
        </div>
        <div class="feature col">
          
        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
          probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi">
            <use xlink:href="#chevron-right"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>

  </LayoutMain>
</template>