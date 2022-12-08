<script setup lang="ts">
import NewsFooter from "@/components/NewsFooter.vue";
import NewsHeader from "@/components/NewsHeader.vue";
import mockData from "@/mock/60s.json";
import html2canvas from 'html2canvas'
import { onMounted, ref, type Ref } from "vue";
export interface TheResponse {
  status: number
  message: string
  data: string[]
}
const newsList: Ref<string[]> = ref([])
const url = import.meta.env.VITE_APP_BASEURL
onMounted(() => {
  fetch(url)
    .then((data) => {
      return data.json()
    }).then((res) => {
      newsList.value = (res as TheResponse).data
    }).catch(() => {
      // 网络获取数据失败，则使用本地数据
      newsList.value = (mockData as TheResponse).data
    });
})
const divRef = ref<HTMLDivElement | null>(null)
const handleSave = () => {
  if (divRef.value === null)
    return
  html2canvas(divRef.value as HTMLDivElement)
    .then((canvas) => {
      const image = canvas.toDataURL()
      const aDownloadLink = document.createElement('a')
      aDownloadLink.download = 'canvas_image.png'
      aDownloadLink.href = image
      aDownloadLink.click()
    })
}
</script>

<template>
  <div class="w-[350px] bg-[seagreen]" ref="divRef">
    <news-header />
    <main class="m-4 bg-white p-3 shadow-sm">
      <div class="flex items-center mb-5 text-[seagreen]">
        <h1>
          <i>「你是懂 The World 的」</i>
        </h1>
        <div class="flex-1"></div>
        <button @click="handleSave" text="primary bold">保存图片</button>
      </div>
      <ul class=" font-mono font-bold text-sm">
        <li v-for="(text, i) in newsList" class="mt-1 leading-6 font-bold font-mono p-1"
          :class="(![0, newsList.length - 1].includes(i)) ? 'border shadow-md' : ''" :key="i">
          {{ text }}
        </li>
      </ul>
    </main>
    <news-footer />
  </div>
</template>

<style scoped>

</style>
