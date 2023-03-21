<script setup>
import { rootUrl } from '@/plugins/getRoutes.js'
import { ref } from 'vue'

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

</script>
<template>
  <div class="mb-12">
    <div class="w-[420px] flex h-10 justify-between items-center mx-auto mb-8">
      <button class="button__tsar rounded-full h-10 justify-center border-purple border-[3px] w-44 transition-all hover:shadow-lg" :class="{'!border-pink bg-pink text-white hover:drop-shadow' : selectedPage === 0}" @click="selectedPage = 0">
        <img src="@/assets/gift_purpleVector.svg" alt="iconGift" v-show="selectedPage !== 0" class="mr-2 transition-all"> 
        <img src="@/assets/gift_whiteVector.svg" alt="iconGift" v-show="selectedPage === 0" class="mr-2 transition-all"> Подарки</button>
      <button class="button__tsar rounded-full h-10 justify-center border-purple border-[3px] w-44 transition-all hover:shadow-lg" 
              :class="{'!border-pink bg-pink text-white hover:drop-shadow' : selectedPage === 1}"
              @click="selectedPage = 1">
        <img src="@/assets/diamond_white.svg" alt="icon" v-show="selectedPage === 1" class="mr-1 transition-all">
        <img src="@/assets/diamond.svg" alt="icon" v-show="selectedPage !== 1" class="mr-1 transition-all"> Алмазы</button>
    </div>
    <p class="mx-auto text-center w-[800px] mb-12">Инструмент для управления вертикальными цепочками вознаграждений и распределения корпоративных подарков от руководителя или компании к сотруднику</p>
    <div>
      <div class="flex justify-between items-start gap-14 mb-4">
        <div v-for="imgLink, index in pages[selectedPage].imgLinks" :key="`card_${index}`" class="flex-1">
          <img :src="imgLink" :alt="`card_${index}`">
        </div>
      </div>
      <div class="flex justify-between items-start gap-14">
        <p class="flex-1 text-center" v-for="desc, index in pages[selectedPage].descContetn" :key="`desc_${index}`">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CareChangerInfo"
}
</script>
<style lang="">
  
</style>