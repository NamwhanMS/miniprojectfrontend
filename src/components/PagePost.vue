<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Post } from './PageHome.vue'
import LayoutMain from '../layouts/LayoutMain.vue'

const route = useRoute()
const post = ref< Post |null>(null)

fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(res => res.json())
    .then(json => post.value =json)
//const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
//const json = await res.json()
//const post: Post = json
</script>

<template>
  <LayoutMain>
    <h1>Post ID: {{ route.params.id }}</h1>
    <h2 class="h4">{{ post?.title }}</h2>
     <p>{{ post?.body }}</p>
  </LayoutMain>
</template>