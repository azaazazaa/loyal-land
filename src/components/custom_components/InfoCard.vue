<script setup>
const {header, imgSrc, imgLabel, mainImg, mainContent} = defineProps({
  header: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    default: ''
  },
  imgLabel: {
    type: String,
    default: ''
  },
  mainImg: {
    type: String,
    default: ''
  },
  mainContent: {
    type: Array,
    default: []
  }
})

</script>
<template>
  <div class="flex flex-col items-center w-[296px] rounded-3xl shadow-lg">
    <div class="bg-white px-4 rounded-t-3xl w-full">
      <div class="flex justify-center items-center h-32">
        <img :src="imgSrc" alt="icon" class="mr-6">
        <h3 class="text-[28px] text-purple">{{ header }}</h3>
      </div>
      <div class="h-28 flex justify-center items-center">
        <img :src="mainImg" alt="meeting" class="absolute z-0">
        <h3 class="text-[22px] text-white font-bold z-10 text-center">{{ imgLabel }}</h3>
      </div>
    </div>
    <div class="flex flex-col items-stretch justify-evenly h-40 background px-4 rounded-b-3xl w-full">
      <span v-for="string, index in mainContent" 
            :key="index" 
            class="text-center text-purple text-base font-medium">
            {{string}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCard'
}
</script>
<style>
  .background{
    background:rgba(255,255,255, 0.2);
  }
</style>