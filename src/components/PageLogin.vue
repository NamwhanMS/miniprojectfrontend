<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//import LayoutMain from '../layouts/LayoutMain.vue'
//import { isLoggedIn } from '../store/auth'

const router = useRouter()
const message = ref('')

function onLogin() {
    message.value = 'seccess to login . wait 5s to redirect.'
    setTimeout(() => {
       // isLoggedIn.value = true
        router.push('/')
    }, 5000)
}

</script>


<template>
    <p>{{ message }}</p>
    <h1>Login</h1>
    <button type="button" class="btn btn-warning" @click="onLogin">Sign in</button>
</template>