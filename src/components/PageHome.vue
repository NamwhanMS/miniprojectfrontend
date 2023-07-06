<script setup lang="ts">
import { ref } from 'vue'
import LayoutMain from '../layouts/LayoutMain.vue'

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}


const posts = ref<Post[]>([])

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => posts.value = json)
</script>


<template>
    <LayoutMain>
        <h1>Home</h1>
        <ul>
            <li v-for="post of posts" :key="post.id">
                <RouterLink :to="`/posts/${post.id}`">
                    ({{ post.id }}) {{ post.title }}
                </RouterLink>
            </li>
        </ul>
    </LayoutMain>
</template>