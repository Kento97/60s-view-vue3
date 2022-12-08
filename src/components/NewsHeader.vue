<script setup lang="ts">
import { getLunar } from 'chinese-lunar-calendar'
type Nums = 0 | 1 | 2 | 3 | 4 | 5 | 6
const getWeekDay = (n: Nums) => {
    return new Map<number, string>()
        .set(0, '日')
        .set(1, '一')
        .set(2, '二')
        .set(3, '三')
        .set(4, '四')
        .set(5, '五')
        .set(6, '六')
        .get(n)
}
const D = new Date()
const year = D.getFullYear()
const month = D.getMonth() + 1
const date = D.getDate()
const day = D.getDay() as Nums
const lunar = getLunar(year, month, date)

</script>

<template>
    <header class="text-white text-center pb-5 font-semibold">
        <p class="font-normal text-sm pt-1">每天 60 秒读懂世界</p>
        <h1 class=" text-5xl py-3">星期{{ getWeekDay(day) }}</h1>
        <p class="text-lg tracking-widest font-bold">{{ `${year}年${month}月${date}日`.split('').join(' ') }}</p>
        <div class=" text-lg">
            <span class="font-bold">周{{ getWeekDay(day) }}</span>
            <span class="ml-8 font-bold">{{ `农历${lunar.dateStr}`.split('').join(' ') }}</span>
        </div>
        <span class="font-bold tracking-widest" v-if="(day === 4)">疯狂星期四,V我50</span>

    </header>
</template>