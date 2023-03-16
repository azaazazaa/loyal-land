<script setup>
import { ref, computed } from 'vue'
const workersNum = ref(15000)
const getPrice = computed(() => {
  if (workersNum.value <= 20) {
    return 2000
  }
  if (workersNum.value <= 100) {
    return 2000 + 80*(workersNum.value - 20)
  }
  if (workersNum.value <= 1000) {
    return 8400 + 50*(workersNum.value - 100)
  }
  return 53400 + 20*(workersNum.value - 1000)
})
const getDescriptionWorkersNum = computed(() => {
  if (workersNum.value <= 20) {
    return 0
  }
  if (workersNum.value <= 100) {
    return 20
  }
  if (workersNum.value <= 1000) {
    return 100
  }
  return 1000
})
const getExtraPriceNum = computed(() => {
  if (workersNum.value <= 20) {
    return 0
  }
  if (workersNum.value <= 100) {
    return 80
  }
  if (workersNum.value <= 1000) {
    return 50
  }
  return 20
})
const fixPrice = computed(() => {
  if (workersNum.value <= 20) {
    return 2000
  }
  if (workersNum.value <= 100) {
    return 2000
  }
  if (workersNum.value <= 1000) {
    return 8400
  }
  return 53400
})
</script>

<template>
  <div class="w-[718px] py-10 px-16 mx-auto bg-white rounded-2xl shadow-md mb-6">
    <h1 class="font-medium underline text-purple_dark text-[57px] leading-[64px] text-center">{{ fixPrice }}</h1>
    <span class="text-2xl text-purple mb-4 text-center inline-block w-full mt-1">в месяц</span>
    <p class="text-center">первые {{ getDescriptionWorkersNum }} сотрудников<br/><span class="underline">+{{ getExtraPriceNum }}</span> рублей за каждого дополнительного сотрудника</p>
    <div class="slider relative h-20 mb-6">
      <input
        type="range"
        class="transparent h-1 p-0 w-full cursor-pointer appearance-none border-transparent bg-[#E7E0EC] rounded mt-14"
        id="customRange1" 
        min="1"
        max="60000"
        step="1"
        v-model="workersNum"/>
    </div>
    <div class="flex justify-center items-center w-full">
      <input type="number" class="border-none mx-auto text-center w-40 underline text-purple text-3xl font-medium p-0" v-model="workersNum">
    </div>
    <h3 class="text-purple text-2xl mx-auto text-center mb-6">сотрудников</h3>
    <h3 class="text-purple text-2xl mx-auto text-center">ИТОГО <span class="font-bold ">{{ getPrice }}</span> &#x20bd;</h3>
  </div>
</template>
<script>
export default {
  name: "TariffCalculation"
}
</script>
<style lang="">
  
</style>