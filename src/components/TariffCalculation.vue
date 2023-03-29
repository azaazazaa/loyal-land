<script setup>
import { ref, computed, watch } from 'vue'
const workersNum = ref(20)
const isShadowFull = ref(false)
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

const getLeftSpacing = computed(() => {
  return (workersNum.value*(590/60000)-22)+'px'
})
const getWidth = computed(() => {
  if ((workersNum.value*(590/60000)-22)+20 < 0) {
    return 0
  }
  return (workersNum.value*(590/60000)-22)+20+'px'
})

/* onMounted(() => {
  workersNum.value = '20'
}) */

function showShadowAnim () {
  isShadowFull.value = true
}
watch(workersNum, (newVal, oldVal) => {
  if(newVal > 60000) {
    workersNum.value = oldVal
  }
})
</script>

<template>
  <div class="w-[718px] py-10 px-16 mx-auto bg-white rounded-2xl shadow-md mb-6">
    <h3 class="text-purple text-2xl mx-auto text-center">ИТОГО</h3>
    <h1 class="font-medium underline text-purple_dark text-[57px] leading-[64px] text-center">{{ getPrice }} &#x20bd;</h1>
    <span class="text-2xl text-purple mb-4 text-center inline-block w-full mt-1">в месяц</span>
    <!-- <p class="text-center">первые {{ getDescriptionWorkersNum }} сотрудников<br/><span class="underline">+{{ getExtraPriceNum }}</span> рублей за каждого дополнительного сотрудника</p> -->
    <div class="slider relative h-20 mb-2 z-10">
        <div class="line w-full h-1 p-0 cursor-pointer appearance-none border-transparent bg-[#E7E0EC] rounded relative top-[60px] -z-20">
          <div class="line__purple bg-purple h-1" :style="{width: getWidth}"></div>
        </div>
        <div class="absolute top-0 flex flex-col justify-start items-center -z-10 min-w-max select-none" :style="{left: getLeftSpacing}">
          <div class="relative">
            <img src="@/assets/dropShape.svg" alt="rangeIcon">
            <span class="absolute top-3 text-[12px] text-white font-normal left-1/2 -translate-x-1/2">{{ workersNum }}</span>
          </div>
          <div class="rangeButton rounded-full bg-purple w-5 h-5 relative">
            <div class="hover:w-10 hover:!h-10 transition-all w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6650a4] opacity-10 rounded-full"
                :class="{'!w-10 !h-10' : isShadowFull}"></div>
          </div>
        </div>
        <input
        @mousedown="showShadowAnim()"
        @mouseover="showShadowAnim()"
        @mouseleave="isShadowFull = false"
        type="range"
        class="transparent h-1 p-0 w-full cursor-pointer appearance-none border-transparent bg-[#E7E0EC] rounded mt-14 z-30 opacity-0"
        id="customRange1" 
        min="1"
        max="60000"
        step="1"
        v-model="workersNum"/>
    </div>
    <div class="flex justify-center items-center w-full">
      <input type="number" min="0" step="1" max="60000" class="border-none text-center w-32 underline text-purple text-3xl font-medium p-0 relative left-5" v-model="workersNum">
      <div class="flex justify-around h-9 w-5 flex-col items-center relative z-10 left-1 bg-white">
        <img src="@/assets/topArrowSm.svg" alt="topIcon">
        <img src="@/assets/topArrowSm.svg" alt="bottomIcon" class="rotate-180">
      </div>
    </div>
    <h3 class="text-purple text-2xl mx-auto text-center mb-6">сотрудников</h3>
    <p class="italic text-center">*тарифы не включают стоимость материального контента, размещённого на платформе, услуги логистики и хранения</p>
  </div>
</template>
<script>
export default {
  name: "TariffCalculation"
}
</script>
<style lang="">
  
</style>