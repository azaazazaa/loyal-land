<script setup>
const {header, imgLabel, mainContent, isPositionRight} = defineProps({
  header: {
    type: String,
    default: ''
  },
  imgLabel: {
    type: String,
    default: ''
  },
  mainContent: {
    type: Array,
    default: []
  },
  isPositionRight: {
    type: Boolean,
    default: false
  }
})

</script>
<template>
  <div class="flex flex-col items-center lg:w-[296px] w-[148px] rounded-3xl shadow-lg" :class="{'self-end' : isPositionRight}">
    <div class="bg-white px-4 rounded-t-3xl w-full">
      <div class="flex justify-center items-center lg:h-32 h-14">
        <slot name="imgIcon"></slot>
        <h3 class="lg:text-[28px] text-purple text-sm">{{ header }}</h3>
      </div>
      <div class="lg:h-28 h-12 flex justify-center items-center">
        <slot name="mainImg"></slot>
        <h3 class="lg:text-[22px] text-white font-bold z-10 text-center text-xs">{{ imgLabel }}</h3>
      </div>
    </div>
    <div class="flex flex-col items-stretch justify-evenly lg:h-40 h-24 background px-4 rounded-b-3xl w-full">
      <span v-for="string, index in mainContent" 
            :key="index" 
            class="text-center text-purple lg:text-base font-medium text-[10px]">
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
    background:rgba(255,255,255, 0.5);
  }
  @media only screen and (max-width: 1024px) {
    .background{
      background:rgba(255,255,255, 0.9);
    }
  }
</style>