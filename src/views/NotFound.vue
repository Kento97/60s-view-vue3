<template>
    <h1 class="h-full flex justify-center items-center">
        <div>
            <img src="../assets/仙贝.png" alt="114514" @click="backToHomePage">
            <p class="font-bold mt-2">页面找不到了，哼哼哼啊啊啊啊啊...</p>
            <p class="text-center text-slate-400">点击图片返回主页</p>
        </div>
    </h1>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const backToHomePage = () => {
    router.replace('/')
}
</script>

<style scoped>

</style>