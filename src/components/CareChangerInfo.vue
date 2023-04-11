<script setup>
import { rootUrl } from '@/plugins/getRoutes.js'
import { ref, computed } from 'vue'
import ChatComponent from '@/components/custom_components/ChatComponent.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


const selectedPage = ref(0)

const pages = ref([
  {
  imgLinks: [rootUrl+'assets/card1.png', rootUrl+'assets/card2.png', rootUrl+'assets/card3.png'],
  descContetn: [
    'Настраивайте коммуникации под разные поводы в форме игровой карточки', 
    'Выберите адресатов, виртуальную открытку под нужный повод, подарок или вознаграждение, прикрепите опрос и установите дату отправки', 
    'Минута - и сотрудник получает поздравление, подарок и ваше внимание где бы он ни находился'
  ]
  },
  {
  imgLinks: [rootUrl+'assets/card2_1.png', rootUrl+'assets/card2_2.png', rootUrl+'assets/card2_3.png'],
  descContetn: [
    'Сотрудник выбирает кого и за что хочет поблагодарить', 
    'Определяет количество алмазов, которые он отправит в качестве благодарности', 
    'В режиме реального времени формируется открытый рейтинг'
  ]
  }])

/* const myCarousel = ref({data: {currentSlide: 0}})

const indexCurrentZero = computed(() => {
  console.debug(myCarousel.value.data.currentSlide)
  return myCarousel.value.data.currentSlide === 0
}) */

</script>
<template>
  <div class="mb-12 px-10 xl:px-0">
    <div class="xl:w-[420px] w-full max-w-xs xl:max-w-none flex xl:h-10 h-8 justify-between items-center mx-auto mb-8">
      <button class="button__tsar rounded-full xl:h-10 h-8 justify-center border-purple border-[3px] xl:w-44 w-32 transition-all hover:shadow-lg 
      hover:!border-pink hover:bg-pink hover:text-white" 
              :class="{'!border-pink bg-pink text-white' : selectedPage === 0}" @click="selectedPage = 0">
        <img src="@/assets/gift_purpleVector.svg" alt="iconGift" v-show="selectedPage !== 0" class="mr-2 transition-all hoverDisapear"> 
        <img src="@/assets/gift_whiteVector.svg" alt="iconGift" v-show="selectedPage === 0" class="mr-2 transition-all hoverApear"> Подарки</button>
      <button class="button__tsar rounded-full xl:h-10 h-8 justify-center border-purple border-[3px] xl:w-44 w-32 transition-all hover:shadow-lg
                   hover:!border-pink hover:bg-pink hover:text-white" 
              :class="{'!border-pink bg-pink text-white hover:drop-shadow hoverDisapear' : selectedPage === 1}"
              @click="selectedPage = 1">
        <img src="@/assets/diamond_white.svg" alt="icon" v-show="selectedPage === 1" class="mr-1 transition-all hoverApear">
        <img src="@/assets/diamond.svg" alt="icon" v-show="selectedPage !== 1" class="mr-1 transition-all hoverDisapear"> Алмазы</button>
    </div>
    <p class="mx-auto text-center w-full mb-4" v-show="selectedPage === 0">Инструмент для управления вертикальными цепочками вознаграждений и распределения корпоративных подарков от руководителя или компании к сотруднику</p>
    <p class="mx-auto text-center w-full mb-4" v-show="selectedPage === 1">Инструмент для создания цепочки горизонтального взаимодействия, в которой сотрудники вознаграждают и благодарят друг друга</p>
    <div class="relative xl:hidden">
      <div class="flex justify-center items-start gap-14 mb-4">
        <Carousel>
          <Slide v-for="indexBlock in 3" :key="indexBlock">
            <div class="relative">
              <div class="flex-1 xl:justify-start justify-center flex">
                <img :src="pages[selectedPage].imgLinks[indexBlock-1]" class="w-56" :alt="`card_${indexBlock-1}`">
              </div>
              <div class="flex justify-center items-start mb-4">
                <p class="flex-1 text-center">{{ pages[selectedPage].descContetn[indexBlock-1] }}</p>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination/>
          </template>
        </Carousel>
        <!-- <div class="pult mx-auto w-16 flex justify-center items-center">
          <div class="w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#D9D9D9] mr-4 hover:cursor-pointer transition-all"
              :class="{'!bg-purple': indexCurrentZero === 0}"></div>
              {{ indexCurrentZero }}
              {{ myCarousel.data.currentSlide }}
          <div class="w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#D9D9D9] mr-4 hover:cursor-pointer transition-all"
              :class="{'!bg-purple': myCarousel.data.currentSlide === 1}"></div>
          <div class="w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#D9D9D9] mr-4 hover:cursor-pointer transition-all"
              :class="{'!bg-purple': myCarousel.data.currentSlide === 2}"></div>
        </div> -->
        <!-- <div class="flex-1 xl:justify-start justify-center flex">
          <img :src="pages[selectedPage].imgLinks[sliderBlockIndex]" class="w-56" :alt="`card_${sliderBlockIndex}`">
        </div> -->
      </div>
      <!-- <div class="flex justify-center items-start mb-4">
        <p class="flex-1 text-center">{{ pages[selectedPage].descContetn[sliderBlockIndex] }}</p>
      </div> -->
      <!-- <div class="pult mx-auto w-16 flex justify-center items-center">
        <div class="w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#D9D9D9] mr-4 hover:cursor-pointer transition-all"
             @click="() => {sliderBlockIndex = 0}"
             :class="{'!bg-purple': sliderBlockIndex === 0}"></div>
        <div class="w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#D9D9D9] mr-4 hover:cursor-pointer transition-all"
             @click="() => {sliderBlockIndex = 1}"
             :class="{'!bg-purple': sliderBlockIndex === 1}"></div>
        <div class="w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#D9D9D9] mr-4 hover:cursor-pointer transition-all"
             @click="() => {sliderBlockIndex = 2}"
             :class="{'!bg-purple': sliderBlockIndex === 2}"></div>
      </div> -->
    </div>
    <div class="relative hidden xl:block">
      <div class="flex justify-between items-start gap-14 mb-4">
        <div v-for="imgLink, index in pages[selectedPage].imgLinks" :key="`card_${index}`" class="flex-1">
          <img :src="imgLink" :alt="`card_${index}`">
        </div>
      </div>
      <div class="flex justify-between items-start gap-14">
        <p class="flex-1 text-center" v-for="desc, index in pages[selectedPage].descContetn" :key="`desc_${index}`">{{ desc }}</p>
      </div>
      <div class="absolute top-32 -right-3 2xl:-right-24 h-36 flex flex-col justify-between items-stretch">
          <ChatComponent>
            <template #img>
              <img src="@/assets/chatIcon_3.png" alt="chatIcon" class="mr-3 w-12 h-12 rounded-full">
            </template>
            <template #text>
                <p class="font-normal text-sm">Спасибо большое, <br/> мне очень приятно!</p>
                <img src="@/assets/heartIcon.svg" alt="heartIcon" class="absolute right-4 -top-4">
            </template>
          </ChatComponent>
          <ChatComponent class="relative left-6">
            <template #img>
              <img src="@/assets/chatGift.svg" alt="chatIcon" class="mr-3">
            </template>
            <template #text>
                <p class="font-normal text-sm">За этот месяц Вы<br/> поблагодарили 10 коллег</p>
            </template>
          </ChatComponent>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CareChangerInfo"
}
</script>
<style>
  .button__tsar:hover > .hoverDisapear{
    display: none;
  }
  .button__tsar:hover > .hoverApear{
    display: block !important;
  }
  .carousel__pagination-button::after{
    background-color: #D9D9D9;
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
  .carousel__pagination-button--active::after{
    background-color: #6750A4!important;
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
</style>