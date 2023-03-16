<script setup>
import {ref} from 'vue'
import HeaderComp from "@/components/HeaderComp.vue"
import RunningLine from "@/components/custom_components/RunningLine.vue"
import MyModal from '@/components/UI_components/MyModal.vue'
import InfoCard from '../components/custom_components/infoCard.vue'
import CatalogWrap from '@/components/CatalogWrap.vue'
import CareChangerInfo from '@/components/CareChangerInfo.vue'
import OpinionPart from '@/components/custom_components/OpinionPart.vue'
import TariffCalculation from '@/components/TariffCalculation.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import Footer from '@/components/Footer.vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const stringContent = ['Служба распределения и доставки', 'It-сервис для смысловых коммуникаций', 'Каталог материальных и виртуальных подарков']
const showModal = ref(false)
const itServiceInfo = [
  { 'bold': 'Формируйте среду', 
  'text': 'для эффективных коммуникаций',
  'posClass': 'top-32 left-32' },
  { 'bold': 'Повышайте уровень понимания', 
  'text': 'ценностей и миссии компании сотрудниками, а в том числе удаленными',
  'posClass': 'left-10 top-[330px] -translate-y-1/2' },
  { 'bold': 'Выстраивайте и укрепляйте', 
  'text': 'горизонтальное и вертикальное взаимодействие',
  'posClass': 'bottom-36 left-12' },
  { 'bold': 'Повышайте уровень вовлеченности', 
  'text': 'и мотивации сотрудников',
  'posClass': 'top-32 right-32' },
  { 'bold': 'Создавайте дополнительные стимулы', 
  'text': 'для достижения бизнес-целей компании',
  'posClass': 'right-10 top-[330px] -translate-y-1/2' },
  { 'bold': 'Формируйте культуру взаимопомощи', 
  'text': 'и благодарности',
  'posClass': 'bottom-36 right-12' }
]

</script>

<template>
  <div class="bg-[#F3EDED]">
    <HeaderComp></HeaderComp>
    <div class="container mx-auto px-36">
      <div class="flex justify-center items-center relative mb-20">
        <div class="flex flex-col justify-start items-start">
          <h1 class="mb-4">
            ПРЕВРАЩАЙТЕ ВАЖНЫХ
            ДЛЯ БИЗНЕСА ЛЮДЕЙ
            В <span class="text-pink">АМБАССАДОРОВ</span> БРЕНДА
          </h1>
          <RunningLine :stringContent="stringContent"></RunningLine>
          <button class="button bg-[#FEB100] text-white border-none h-14 w-72 font-bold" @click="showModal = true">Запросить демо</button>
        </div>
        <img src="@/assets/greeting_img.png" class="h-[775px] object-cover" alt="greetingPage">
        <img src="@/assets/greeting-decoration.png" class="absolute -top-10 -right-5" alt="dec">
      </div>
      <MyModal :isOpen="showModal" @close="() => {showModal = false}"/>
      <div class="flex flex-col justify-start items-stretch">
        <h1 class="mb-12 mx-auto w-3/5 text-center uppercase">Мы знаем, как влюбить в ваш бренд важных для бизнеса людей</h1>
        <div class="flex justify-between items-center mb-20">
          <InfoCard :header="'Сотрудники'" 
                    :imgSrc="'../src/assets/workers.svg'" 
                    :imgLabel="'Выстраиваем коммуникацию'"
                    :mainImg="'../src/assets/communication.png'"
                    :mainContent="['Повышаем eNPS', 'Строим hr-бренд']"/>
          <InfoCard :header="'Клиенты'" 
                    :imgSrc="'../src/assets/clients.svg'" 
                    :imgLabel="'Формируем доверие'"
                    :mainImg="'../src/assets/loyalty.png'"
                    :mainContent="['Увеличиваем скорость принятия решения о покупке']"/>
          <InfoCard :header="'Партнёры'" 
                    :imgSrc="'../src/assets/partners.svg'" 
                    :imgLabel="'Повышаем эффективность'"
                    :mainImg="'../src/assets/effectiv.png'"
                    :mainContent="['Повышаем лояльность', 'Увеличиваем узнаваемость']"/>
        </div>
        <h1 class="mx-auto w-3/5 text-center">IT - СЕРВИС ДЛЯ СМЫСЛОВЫХ КОММУНИКАЦИЙ </h1>
        <div class="relative w-full">
          <img src="@/assets/communication_big.png" alt="img" class="h-[700px] object-contain mx-auto">
          <div v-for="comp, index in itServiceInfo" :key="index" class="absolute bg-white rounded-2xl py-3 px-4 w-96" :class="comp['posClass']">
            <p><span class="font-bold">{{comp['bold']}}</span> {{ comp['text'] }}</p>
          </div>
        </div>
        <h1 class="mb-10 mx-auto text-center">КАТАЛОГ МАТЕРИАЛЬНЫХ И ВИРТУАЛЬНЫХ ПОДАРКОВ</h1>
        <div class="mb-20">
          <CatalogWrap @openModal="() => {showModal = true}"></CatalogWrap>
        </div>
        <h1 class="mx-auto text-center uppercase">Служба распределения и доставки</h1>
        <div class="relative z-10 flex justify-evenly items-center mb-14">
          <img src="@/assets/giftDecor.svg" alt="decor" class="z-0 absolute top-6 left-0">
          <img src="@/assets/giftHand.png" alt="giftIcon" class="z-10 relative">
          <div class="z-10 flex w-[348px] justify-between h-[240px] items-stretch flex-col mr-[25px] top-2 relative -left-[40px]">
            <p><span class="font-bold">Автоматизируйте процесс</span><br/> и управляйте эффективностью вовлечённых в процесс распределения и доставки сотрудников компании</p>
            <p><span class="font-bold">Оптимизируйте затраты</span><br/> человеческого ресурса<br/> за счёт передачи на аутсорс непрофильных задач</p>
          </div>
        </div>
        <h1 class="mb-10 mx-auto text-center uppercase">Почему мы и Как это работает?</h1>
        <CareChangerInfo></CareChangerInfo>
        <OpinionPart></OpinionPart>
        <h1 class="mb-10 mx-auto text-center uppercase">Калькулятор тарифов</h1>
        <TariffCalculation></TariffCalculation>
        <p class="italic text-center mb-7">*тарифы не включают стоимость материального контента, размещённого на платформе, услуги логистики и хранения</p>
        <button class="button__gold w-[300px] h-10 mx-auto shadow-sm mb-16" @click="showModal = true">Купить</button>
        <h1 class="uppercase mb-6 text-center mx-auto">Ответы на часто задаваемые вопросы</h1>
        <div class="w-full mb-10">
          <div class="mx-auto w-full rounded-2xl bg-white py-2 mb-2">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex w-full justify-between rounded-lg bg-purple-100 px-12 py-2 text-left text-purple text-2xl font-semibold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <ChevronUpIcon
                  :class="open ? 'rotate-180 transform' : ''"
                  class="h-5 w-5 text-purple-500 transition-all"
                />
              </DisclosureButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <DisclosurePanel class="px-12 pt-4 pb-2 text-base text-purple">
                  If you're unhappy with your purchase for any reason, email us within
                  90 days and we'll refund you in full, no questions asked.
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
          <div class="mx-auto w-full rounded-2xl bg-white py-2 mb-2 transition-all">
            <Disclosure as="div" v-slot="{ open }">
              <DisclosureButton
                class="flex w-full justify-between rounded-lg bg-purple-100 px-12 py-2 text-left text-purple text-2xl font-semibold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  :class="open ? 'rotate-180 transform' : ''"
                  class="h-5 w-5 text-purple text-2xl font-semibold transition-all"
                />
              </DisclosureButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <DisclosurePanel class="px-12 pt-4 pb-2 text-base text-purple">
                  No.
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
        </div>
        <h1 class="mx-auto text-center mb-8 uppercase">Выбрать удобное время для звонка</h1>
        <div class="mb-16 flex justify-center items-center">
          <iframe src="https://calendly.com/petrashko-mikhail_loyalgift/45min" width="1001" height="700" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <Footer @openModal="() => {showModal = true}"></Footer>
  </div>
</template>

<script>
export default {
    name: "HR-page",
    components: { InfoCard }
}
</script>

<style scoped>

</style>