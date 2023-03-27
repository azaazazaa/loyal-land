<script setup>
import { rootUrl } from '@/plugins/getRoutes.js'
import { ref } from 'vue'

  const pages = ref([
    {
      btnLabel: 'Впечатление', 
      btnImg: rootUrl+'assets/btnImg1.png', 
      isOpen: true
    },
    {
      btnLabel: 'Забота о сотрудниках', 
      btnImg: rootUrl+'assets/impression.png', 
      isOpen: false
    },
    {
      btnLabel: 'Обучение', 
      btnImg: rootUrl+'assets/studying.png', 
      isOpen: false
    },
    {
      btnLabel: 'Развитие', 
      btnImg: rootUrl+'assets/developmentIcon.png', 
      isOpen: false
    },
  ])

  const cardsContetn = ref([
    [
      {
        imgSrc: rootUrl+'assets/siesta.png',
        headerLabel: 'сиеста',
        description: 'Представьте, что обеденный перерыв три часа вместо одного. Достаточно времени, чтобы прогуляться, пройти урок иностранного языка, почитать в уютном кафе или вздремнуть в переговорной.'
      },
      {
        imgSrc: rootUrl+'assets/roleChanges.png',
        headerLabel: 'поменяться ролями',
        description: 'Вы хорошо знаете свои рабочие обязанности. А как проходит рабочий день ваших коллег? Обмен опытом открывает другие возможности и сферы влияния. Вдохновляйтесь на новое!'
      },
      {
        imgSrc: rootUrl+'assets/library.png',
        headerLabel: 'читальный зал',
        description: 'Подарок для тех, кому не хватает времени или условий, чтобы удобно устроившись в кресле, почитать бумажную книгу без отвлечений.'
      },
    ],
    [
      {
        imgSrc: rootUrl+'assets/space.png',
        headerLabel: 'я сегодня в космос',
        description: 'Может оказаться, что звезда, которая ночью видна из окна, вовсе не звезда, а планета. Через телескопы мира та планета откроется новыми видами. А если космос покажется одиноким, встречайте закат на Марсе с Curiosity.'
      },
      {
        imgSrc: rootUrl+'assets/colorsHoly.png',
        headerLabel: 'другая индия',
        description: 'Индия у каждого своя. Путешествуйте без билетов через чувства, мысли, истории, фотографии, фильмы и рассказы других людей.'
      },
      {
        imgSrc: rootUrl+'assets/forest.png',
        headerLabel: 'сосновый лес',
        description: 'Вы помните свои прогулки по лесу? Как дышалось? О чем думали? Что запомнилось – запахи, звуки,  настроение? День в лесу – подарок-лекарство для тела и ума.'
      },
    ],
    [
      {
        imgSrc: rootUrl+'assets/futureBecame.png',
        headerLabel: 'Будущее наступило',
        description: 'Ты человек? Вопрос, который мы задаём всё чаще. Это курс о разговорах с чат-ботами и нейросетях. Как пользоваться, о чем говорить, чему учиться друг у друга?'
      },
      {
        imgSrc: rootUrl+'assets/loveWithoutRules.png',
        headerLabel: 'любовь по правилам и без',
        description: 'Готовы влюбиться в того, кто рядом? 36 вопросов для моментальной влюбленности и 390 минут беспрерывной любви.'
      },
      {
        imgSrc: rootUrl+'assets/codeAccessible.png',
        headerLabel: 'доступный код',
        description: 'Программист – профессия, о которой сейчас знают все, но что именно знают? Легендарный Гарвардский курс CS50 «Основы программирования» - интересное вовлечение в профессию для каждого.'
      },
    ],
    [
      {
        imgSrc: rootUrl+'assets/hobbyTime.png',
        headerLabel: 'зелёная стена',
        description: 'Хобби приносит неплохой доход, а своё дело открыть страшно. Может не хватает знаний, а потому и уверенности, или хочется поддержки и полезных советов. Вдохновитесь и начните сегодня!'
      },
      {
        imgSrc: rootUrl+'assets/artTravel.png',
        headerLabel: 'руками трогать',
        description: 'Не разбираетесь в искусстве? Отлично! В пижаме, не выходя из дома, потрогайте руками картину, послушайте живопись, поиграйте в художника и искусствоведа, а на десерт сходите в музей.'
      },
      {
        imgSrc: rootUrl+'assets/misic.png',
        headerLabel: 'музыка',
        description: 'Электронная музыка изменила представление о том, что значит быть музыкантом. Вы хотите услышать, как звучит ваша музыка? Наслаждайтесь!'
      },
    ],
  ])
  
  const previosOpenedIndex = ref(0)
  const currentIndex = ref(0)


  const getImageUrl = (link) => {
    return link
  }

  function openningPage(index) {
    currentIndex.value = index
    pages.value[previosOpenedIndex.value].isOpen = false
    pages.value[index].isOpen = true
    previosOpenedIndex.value = index
  }
</script>

<template>
  <div class="flex items-center h-[418px]">
    <div class="btn_wrapper w-[315px] mr-8 flex flex-col justify-between items-stretch">
      <div class="w-[315px]">
        <button class="button__tsar mb-7 hover:!bg-pink_light hover:text-white transition-all" 
                v-for="page, index in pages" :key="index"
                :class="{'active' : page.isOpen}"
                @click="openningPage(index)">
          <img :src="getImageUrl(page.btnImg)" alt="icon" class="h-12 rounded-full px-3 mr-3">
          {{page.btnLabel}}
        </button>
      </div>
      <button class="button__gold w-[315px] transition-all hover:drop-shadow" @click="$emit('openModal')">Хочу попробовать</button>
      <!-- <button class="button__gold w-[315px] transition-all hover:drop-shadow" @click="$emit('openModal')">Свяжитесь со мной</button> -->
    </div>
    <div class="cards_wrapper gap-2 flex justify-between items-stretch h-full">
      <div class="card w-auto h-full flex-1 flex flex-col items-stretch"
           v-for="card, index in cardsContetn[currentIndex]" :key="index">
        <img :src="getImageUrl(card.imgSrc)" alt="img" class="rounded-t-2xl" :class="{'bg-[#21252D]' : card.headerLabel === 'Будущее наступило'}">
        <div class="bg-white flex-col justify-around 
                  items-stretch h-full pb-5 px-5 pt-5 box-content rounded-b-2xl shadow-lg ">
          <h3 class="text-purple text-center uppercase font-bold text-base mb-2">{{ card.headerLabel }}</h3>
          <p class="h-full text-xs font-medium text-center">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogWrap"
}
</script>
<style lang="">
  
</style>