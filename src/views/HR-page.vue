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
      <div class="flex md:flex-row flex-col justify-center md:items-center items-end relative 2xl:mb-20 mb-10">
        <div class="flex flex-col justify-start items-start px-10 xl:px-0">
          <h1 class="mb-4 w-3/4">
            ПРЕВРАЩАЙТЕ ВАЖНЫХ
            ДЛЯ БИЗНЕСА ЛЮДЕЙ
            В <span class="text-pink">АМБАССАДОРОВ</span> БРЕНДА
          </h1>
          <RunningLine :stringContent="stringContent"></RunningLine>
          <button class="button bg-[#FEB100] text-white border-none xl:h-14 xl:w-72 h-9 w-60 
                        font-bold hover:!bg-pink_light transition-all hover:shadow-pink_light mb-4" 
                       @click="showModal = true">Запросить демо</button>
        </div>
        <img src="@/assets/greeting_img.png" class="xl:h-[775px] xl:object-cover md:block w-[65%] hidden" alt="greetingPage">
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
        <div class="absolute xl:top-[880px] md:top-[1080px] top-[780px] w-full flex justify-center mb-6 xl:mb-0">
          <img src="@/assets/garlandLine.svg" alt="" class="w-full object-cover hidden xl:block"/>
          <img src="@/assets/garland_sm.svg" alt="" class="h-[550px] self-end object-cover md:hidden">
          <div class="xl:w-40 xl:h-40 h-20 w-20 rounded-full bg-[#6750A4] blur-xl absolute xl:left-44 left-12 
                      transition-all duration-500 md:translate-y-0 -translate-y-32"
          :style="{'bottom' : (-scrollHieght+y + 9500)/30 + 'px'}"></div>
          <div class="xl:w-40 xl:h-40 h-20 w-20 rounded-full bg-[#FF7475] blur-xl absolute xl:right-1/3 right-1/3 
                      transition-all md:translate-y-0 -translate-y-[570px]  duration-700"
          :style="{'bottom' : (-scrollHieght+y + 2120)/40 + 'px'}"></div>
          <div class="xl:w-40 xl:h-40 h-20 w-20 rounded-full bg-[#FEB100] blur-xl absolute xl:right-48 right-12 transition-all duration-1000"
          :style="{'bottom' : (-scrollHieght+y + 4800)/20 + 'px'}"></div>
        </div>
      </teleport>
      <MyModal :isOpen="showModal" @close="() => {showModal = false}"/>
      <div class="flex flex-col justify-start items-stretch">
        <h1 class="2xl:mb-12 mb-6 xl:mx-auto xl:w-3/5 xl:text-center uppercase z-10 text-left px-10 xl:px-0">Мы знаем, как влюбить в ваш бренд важных для бизнеса людей</h1>
        <div class="flex lg:flex-row flex-col justify-between lg:items-center items-stretch 2xl:mb-20 mb-10 z-10 lg:px-0 px-10">
          <InfoCard :header="'Сотрудники'"
                    :imgLabel="'Выстраиваем коммуникацию'"
                    :mainContent="['Повышаем eNPS', 'Строим hr-бренд']">
              <template #imgIcon>
                <img src="@/assets/workers.svg" alt="icon" class="lg:mr-6 mr-3 lg:w-full w-6  object-cover">
              </template>
              <template #mainImg>
                <img src="@/assets/communication.png" alt="meeting" class="z-0 absolute lg:w-auto w-[158px]">
              </template>
          </InfoCard>
          <InfoCard :header="'Клиенты'"
                    :imgLabel="'Формируем доверие'"
                    :mainContent="['Увеличиваем скорость принятия решения о покупке']"
                    :isPositionRight="true">
            <template #imgIcon>
              <img src="@/assets/clients.svg" alt="icon" class="lg:mr-6 mr-3 lg:w-full w-6  object-cover">
            </template>
            <template #mainImg>
              <img src="@/assets/loyalty.png" alt="meeting" class="z-0 absolute lg:w-auto w-[158px]">
            </template>
          </InfoCard>
          <InfoCard :header="'Партнёры'"
                    :imgLabel="'Повышаем эффективность'"
                    :mainContent="['Повышаем лояльность', 'Увеличиваем узнаваемость']">
            <template #imgIcon>
              <img src="@/assets/partners.svg" alt="icon" class="lg:mr-6 mr-3 lg:w-full w-6  object-cover">
            </template>
            <template #mainImg>
              <img src="@/assets/effectiv.png" alt="meeting" class="z-0 absolute lg:w-auto w-[158px]">
            </template>
          </InfoCard>
        </div>
        <h1 class="xl:mx-auto xl:w-3/5 xl:text-center mb-0 md:mb-5 xl:mb-0 text-left ml-10">IT - СЕРВИС ДЛЯ СМЫСЛОВЫХ КОММУНИКАЦИЙ </h1>
        <div class="relative w-full">
          <img src="@/assets/communication_big.png" alt="img" class="xl:h-[700px] md:h-[536px] h-[400px] object-contain mx-auto">
          <div class="md:absolute relative md:top-0 w-full xl:h-[700px] md:h-[536px] h-auto flex flex-col justify-start items-stretch xl:block xl:px-0 px-10">
            <div v-for="comp, index in itServiceInfo" :key="index" class="xl:absolute bg-white opacity-80 xl:!opacity-100 mb-5 rounded-2xl py-3 px-4 xl:w-96 md:w-64 w-full self-start" :class="comp['posClass'], {
              'self-end' : index>2
            }">
              <p><span class="font-bold">{{comp['bold']}}</span> {{ comp['text'] }}</p>
            </div>
          </div>
        </div>
        <h1 class="2xl:mb-12 mb-3 xl:mx-auto xl:text-center text-left px-10 xl:px-0 mt-6">КАТАЛОГ МАТЕРИАЛЬНЫХ И ВИРТУАЛЬНЫХ ПОДАРКОВ</h1>
        <div class="2xl:mb-20 mb-10 px-10 xl:px-0">
          <CatalogWrap @openModal="() => {showModal = true}"></CatalogWrap>
        </div>
        <h1 class="xl:mx-auto xl:ml-10 xl:text-center text-left uppercase px-10 xl:px-0">Служба распределения и доставки</h1>
        <div class="relative z-10 flex xl:justify-evenly items-center mb-14 xl:flex-row flex-col justify-start xl:px-0 px-10">
          <img src="@/assets/giftDecor.svg" alt="decor" class="z-0 absolute top-6 left-0 xl:block hidden">
          <img src="@/assets/gift_decor_sm.svg" alt="decor" class="z-0 absolute top-6 left-1/2 -translate-x-1/2 block xl:hidden h-96">
          <img src="@/assets/giftHand.png" alt="giftIcon" class="z-10 xl:relative xl:w-auto w-52 self-end">
          <div class="z-10 flex sm:w-[348px] w-full justify-between 2xl:h-[240px] h-[160px] items-stretch flex-col mr-[25px]
                      top-2 xl:relative xl:-left-[30px] self-start xl:self-auto">
            <p><span class="font-bold">Автоматизируйте процесс</span><br/> и управляйте эффективностью вовлечённых в процесс распределения и доставки сотрудников компании</p>
            <p><span class="font-bold">Оптимизируйте затраты</span><br/> человеческого ресурса<br/> за счёт передачи на аутсорс непрофильных задач</p>
          </div>
        </div>
        <h1 class="xl:mx-auto xl:ml-10 xl:text-center text-left uppercase px-10 xl:px-0 mb-5 xl:mb-10">Почему мы и Как это работает?</h1>
        <CareChangerInfo></CareChangerInfo>
        <OpinionPart v-if="false"></OpinionPart>
        <h1 class="xl:mx-auto xl:ml-10 xl:text-center text-left uppercase px-10 xl:px-0 mb-5 xl:mb-10">Калькулятор тарифов</h1>
        <TariffCalculation></TariffCalculation>
        <button class="button__gold w-[300px] xl:h-10 h-8 mx-auto shadow-sm mb-16 hover:shadow-lg transition-all" @click="showModal = true">Купить</button>
        <h1 class="uppercase mb-6 text-center mx-auto" v-if="false">Ответы на часто задаваемые вопросы</h1>
        <QestionsAnswers></QestionsAnswers>
        <h1 class="xl:mx-auto xl:ml-10 xl:text-center text-left uppercase px-10 xl:px-0 mb-5 xl:mb-10">Давайте организуем встречу в удобное для вас время</h1>
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