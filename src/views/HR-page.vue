<script setup>
import {ref, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import RunningLine from "@/components/custom_components/RunningLine.vue"
import MyModal from '@/components/UI_components/MyModal.vue'
import InfoCard from '@/components/custom_components/infoCard.vue'
import CatalogWrap from '@/components/CatalogWrap.vue'
import CareChangerInfo from '@/components/CareChangerInfo.vue'
import OpinionPart from '@/components/custom_components/OpinionPart.vue'
import TariffCalculation from '@/components/TariffCalculation.vue'
import ChatComponent from '@/components/custom_components/ChatComponent.vue'
import QestionsAnswers from '../components/custom_components/QestionsAnswers.vue'
import TelegramComp from '../components/TelegramComp.vue'
import Footer from '@/components/Footer.vue'

const stringContent = ['Служба распределения и доставки', 'It-сервис для смысловых коммуникаций', 'Каталог материальных и виртуальных подарков']
const showModal = ref(false)
const itServiceInfo = [
  { 'bold': 'Формируйте среду', 
  'text': 'для эффективных коммуникаций',
  'posClass': 'xl:top-32 xl:left-32' },
  { 'bold': 'Повышайте уровень понимания', 
  'text': 'ценностей и миссии компании сотрудниками, а в том числе удаленными',
  'posClass': 'xl:left-10 xl:top-[330px] xl:-translate-y-1/2' },
  { 'bold': 'Выстраивайте и укрепляйте', 
  'text': 'горизонтальное и вертикальное взаимодействие',
  'posClass': 'xl:bottom-36 xl:left-12' },
  { 'bold': 'Повышайте уровень вовлеченности', 
  'text': 'и мотивации сотрудников',
  'posClass': 'xl:top-32 xl:right-32' },
  { 'bold': 'Создавайте дополнительные стимулы', 
  'text': 'для достижения бизнес-целей компании',
  'posClass': 'xl:right-10 xl:top-[330px] xl:-translate-y-1/2' },
  { 'bold': 'Формируйте культуру взаимопомощи', 
  'text': 'и благодарности',
  'posClass': 'xl:bottom-36 xl:right-12' }
]

const scrollHieght = ref(0)
const { x, y } = useWindowScroll()

onMounted(() => {
  scrollHieght.value = document.body.scrollHeight
})

</script>

<template>
  <div class="bg-[#F3EDED]">
    <img src="@/assets/loyal_gift.svg" alt="LoyalGift" class="relative top-5 left-10">
    <!-- <HeaderComp></HeaderComp> -->
    <div class="container mx-auto px-0 md:px-10 2xl:px-36 mt-10">
      <div class="flex md:flex-row flex-col justify-center md:items-center items-end relative mb-20 ">
        <div class="flex flex-col justify-start items-start px-10 xl:px-0">
          <h1 class="mb-4 w-3/4">
            ПРЕВРАЩАЙТЕ ВАЖНЫХ
            ДЛЯ БИЗНЕСА ЛЮДЕЙ
            В <span class="text-pink">АМБАССАДОРОВ</span> БРЕНДА
          </h1>
          <RunningLine :stringContent="stringContent"></RunningLine>
          <button class="button bg-[#FEB100] text-white border-none xl:h-14 xl:w-72 h-5 w-44 xl:font-bold font-normal hover:!bg-pink_light transition-all hover:shadow-pink_light" @click="showModal = true">Запросить демо</button>
        </div>
        <img src="@/assets/greeting_img.png" class="xl:h-[775px] xl:object-cover md:block w-3/4 hidden" alt="greetingPage">
        <img src="@/assets/greeting-decoration.png" class="md:absolute md:-top-6 md:-right-5 md:block hidden" alt="dec">
        <img src="@/assets/greeting_sm.png" class="w-3/4 md:hidden mr-10" alt="dec">
        <div class="absolute bottom-24 left-1/3 h-40 flex-col justify-between items-stretch hidden md:flex">
          <ChatComponent>
            <template #img>
              <img src="@/assets/chatIcon.png" alt="chatIcon" class="mr-3 w-10 h-10 rounded-full">
            </template>
            <template #text>
                <p class="font-normal xl:text-sm text-xs">Благодарю за участие<br/> в проекте, выберите,<br/> пожалуйста, подарок!</p>
            </template>
          </ChatComponent>
          <ChatComponent class="relative left-24">
            <template #img>
              <img src="@/assets/chatIcon_2.png" alt="chatIcon" class="mr-3 w-10 h-10 rounded-full">
            </template>
            <template #text>
                <p class="font-normal xl:text-sm text-xs">Выбрал, спасибо,<br/> мне очень приятно!</p>
            </template>
          </ChatComponent>
        </div>
      </div>
      <teleport to="body">
        <div class="absolute top-[880px] w-full flex justify-center">
          <img src="@/assets/garlandLine.svg" alt="" class="w-full object-cover hidden xl:block"/>
          <img src="@/assets/garland_sm.svg" alt="" class="h-[600px] self-end object-cover xl:hidden">
          <div class="w-40 h-40 rounded-full bg-[#6750A4] blur-xl absolute left-44 bottom-1 transition-all duration-500"
          :style="{'bottom' : (-scrollHieght+y + 6100)/30 + 'px'}"></div>
          <div class="w-40 h-40 rounded-full bg-[#FF7475] blur-xl absolute left-1/3  -bottom-28 transition-all duration-700"
          :style="{'bottom' : (-scrollHieght+y + 2120)/40 + 'px'}"></div>
          <div class="w-40 h-40 rounded-full bg-[#FEB100] blur-xl absolute right-48  bottom-4 transition-all duration-1000"
          :style="{'bottom' : (-scrollHieght+y + 4800)/20 + 'px'}"></div>
        </div>
      </teleport>
      <MyModal :isOpen="showModal" @close="() => {showModal = false}"/>
      <div class="flex flex-col justify-start items-stretch">
        <h1 class="mb-12 mx-auto w-3/5 text-center uppercase z-10">Мы знаем, как влюбить в ваш бренд важных для бизнеса людей</h1>
        <div class="flex lg:flex-row flex-col justify-between lg:items-center items-stretch mb-20 z-10 lg:px-0 px-10">
          <InfoCard :header="'Сотрудники'" 
                    :imgSrc="rootUrl+'assets/workers.svg'" 
                    :imgLabel="'Выстраиваем коммуникацию'"
                    :mainImg="rootUrl+'assets/communication.png'"
                    :mainContent="['Повышаем eNPS', 'Строим hr-бренд']" :key="123123"/>
          <InfoCard :header="'Клиенты'" 
                    :imgSrc="rootUrl+'assets/clients.svg'" 
                    :imgLabel="'Формируем доверие'"
                    :mainImg="rootUrl+'assets/loyalty.png'"
                    :mainContent="['Увеличиваем скорость принятия решения о покупке']"
                    :isPositionRight="true" :key="1233"/>
          <InfoCard :header="'Партнёры'" 
                    :imgSrc="rootUrl+'assets/partners.svg'" 
                    :imgLabel="'Повышаем эффективность'"
                    :mainImg="rootUrl+'assets/effectiv.png'"
                    :mainContent="['Повышаем лояльность', 'Увеличиваем узнаваемость']" :key="123"/>
        </div>
        <h1 class="xl:mx-auto xl:w-3/5 xl:text-center mb-5 xl:mb-0 text-left ml-10">IT - СЕРВИС ДЛЯ СМЫСЛОВЫХ КОММУНИКАЦИЙ </h1>
        <div class="relative w-full">
          <img src="@/assets/communication_big.png" alt="img" class="xl:h-[700px] h-[536px] object-contain mx-auto">
          <div class="absolute top-0 w-full xl:h-[700px] h-[536px] flex flex-col justify-start items-stretch xl:block xl:px-0 px-10">
            <div v-for="comp, index in itServiceInfo" :key="index" class="xl:absolute bg-white opacity-80 xl:!opacity-100 mb-5 rounded-2xl py-3 px-4 xl:w-96 w-64 self-start" :class="comp['posClass'], {
              'self-end' : index>2
            }">
              <p><span class="font-bold">{{comp['bold']}}</span> {{ comp['text'] }}</p>
            </div>
          </div>
        </div>
        <h1 class="mb-10 mx-auto text-center">КАТАЛОГ МАТЕРИАЛЬНЫХ И ВИРТУАЛЬНЫХ ПОДАРКОВ</h1>
        <div class="mb-20 px-10 xl:px-0">
          <CatalogWrap @openModal="() => {showModal = true}"></CatalogWrap>
        </div>
        <h1 class="xl:mx-auto xl:ml-10 xl:text-center text-left uppercase px-10 xl:px-0">Служба распределения и доставки</h1>
        <div class="relative z-10 flex xl:justify-evenly xl:items-center mb-14 xl:flex-row flex-col justify-start items-stretch xl:px-0 px-10">
          <img src="@/assets/giftDecor.svg" alt="decor" class="z-0 absolute top-6 left-0 xl:block hidden">
          <img src="@/assets/giftHand.png" alt="giftIcon" class="z-10 xl:relative xl:w-auto w-56 self-end">
          <div class="z-10 flex sm:w-[348px] w-full justify-between h-[240px] items-stretch flex-col mr-[25px] top-2 xl:relative xl:-left-[30px] self-start xl:self-auto">
            <p><span class="font-bold">Автоматизируйте процесс</span><br/> и управляйте эффективностью вовлечённых в процесс распределения и доставки сотрудников компании</p>
            <p><span class="font-bold">Оптимизируйте затраты</span><br/> человеческого ресурса<br/> за счёт передачи на аутсорс непрофильных задач</p>
          </div>
        </div>
        <h1 class="mb-10 mx-auto text-center uppercase">Почему мы и Как это работает?</h1>
        <CareChangerInfo></CareChangerInfo>
        <OpinionPart v-if="false"></OpinionPart>
        <h1 class="mb-10 mx-auto text-center uppercase">Калькулятор тарифов</h1>
        <TariffCalculation></TariffCalculation>
        <button class="button__gold w-[300px] xl:h-10 h-8 mx-auto shadow-sm mb-16 hover:shadow-lg transition-all" @click="showModal = true">Купить</button>
        <h1 class="uppercase mb-6 text-center mx-auto" v-if="false">Ответы на часто задаваемые вопросы</h1>
        <QestionsAnswers></QestionsAnswers>
        <h1 class="mx-auto text-center mb-8 uppercase">Давайте организуем встречу в удобное для вас время</h1>
        <div class="mb-16 flex justify-center items-center px-10 xl:px-5 xl:h-auto">
          <iframe src="https://calendly.com/petrashko-mikhail_loyalgift/45min" width="1001" height="660" frameborder="0" id="iframe"></iframe>
        </div>
      </div>
    </div>
    <TelegramComp></TelegramComp>
    <Footer @openModal="() => {showModal = true}"></Footer>
  </div>
</template>

<script>
import { rootUrl } from '@/plugins/getRoutes.js'

export default {
    name: "HR-page"
}
</script>

<style scoped>
/* #iframe{
  width: 600px; 
  height: 436px; 
  padding: 0; 
  overflow: hidden;
} */
</style>