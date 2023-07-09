<script setup lang="ts">
//import { ref } from 'vue'
import LayoutMain from '../layouts/LayoutMain.vue'

//export interface Post {
   // userId: number
    //id: number
    //title: string
    //body: string
//}

//const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//const json =await res.json()
//const posts: Post[] = json



//<ul>
        //    <li v-for="post of posts" :key="post.id">
         //       <RouterLink :to="`/posts/${post.id}`">
         //           ({{ post.id }}) {{ post.title }}
        //        </RouterLink>
        //    </li>
      //  </ul>


</script>


<template>
  <LayoutMain>
    <div class="container px-4 py-4" id="featured-3">
      <h1 class="pb-2 border-bottom">Dashboard</h1>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
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


</LayoutMain></template>