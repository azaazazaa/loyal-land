<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <div class="w-full mb-16 px-10 xl:px-0">
    <div class="mx-auto w-full rounded-2xl bg-white xl:py-2 py-0 mb-2 transition-all shadow-md hover:-translate-y-[2px]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between items-center rounded-lg bg-purple-100 xl:px-12 px-3 xl:py-2 py-1 text-left text-purple xl:text-2xl text-xs font-semibold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Что такое Loyal.Gift?</span>
          <img src="@/assets/triangelTop.svg" alt="svg" class="transition-all w-[6px] h-[6px] xl:w-auto xl:h-auto" :class="open ? 'rotate-180 transform' : ''">
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="xl:px-12 px-4 xl:pt-4 xl:pb-2 py-1 pt-2 xl:text-base text-[8px] leading-3 text-purple">
            Это платформа, которая поможет вашей компании выстраивать коммуникацию с важными для бизнеса людьми – сотрудниками, клиентами, партнерами. Для этого мы объединили:<br/>
            <br/>
            - it-сервис, с помощью которого сотрудники компании смогут взаимодействовать друг с другом с помощью творческих сообщений, а шаблоны и интуитивно понятный интерфейс позволят сделать это общение простым и эффективным;<br/>
            - систему управления материальными подарками;<br/>
            - базу нематериальных подарков.<br/>
            <br/>
            Такая экосистема позволит автоматизировать hr-процессы и повысить уровень вовлеченности команды.
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
    <div class="mx-auto w-full rounded-2xl bg-white xl:py-2 py-0 mb-2 transition-all shadow-md hover:-translate-y-[2px]">
      <Disclosure as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between items-center rounded-lg bg-purple-100 xl:px-12 px-3 py-2 text-left text-purple xl:text-2xl text-xs font-semibold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Сколько времени занимает внедрение Loyal.Gift?</span>
          <img src="@/assets/triangelTop.svg" alt="svg" class="transition-all w-[6px] h-[6px] xl:w-auto xl:h-auto" :class="open ? 'rotate-180 transform' : ''">
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="xl:px-12 px-4 xl:pt-4 xl:pb-2 py-1 pt-2 xl:text-base text-[8px] leading-3 text-purple">
            Здесь все зависит от вашего запроса. Средний период внедрения — 14 дней. За это время мы настроим сервис, обучим вовлечённых сотрудников, внесем материальные вознаграждения и обеспечим доступ к платформе для всей команды.
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
    <div class="mx-auto w-full rounded-2xl bg-white xl:py-2 py-0 mb-2 transition-all shadow-md hover:-translate-y-[2px]">
      <Disclosure as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between items-center rounded-lg bg-purple-100 xl:px-12 px-3 py-2 text-left text-purple xl:text-2xl text-xs font-semibold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Для каких сфер подходит сервис Loyal.Gift?</span>
          <img src="@/assets/triangelTop.svg" alt="svg" class="transition-all w-[6px] h-[6px] xl:w-auto xl:h-auto" :class="open ? 'rotate-180 transform' : ''">
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="xl:px-12 px-4 xl:pt-4 xl:pb-2 py-1 pt-2 xl:text-base text-[8px] leading-3 text-purple">
            Сервис может быть адаптирован под любую сферу. Сейчас наши основные клиенты — это it-сектор, FMCG, FinTech, а также промышленные компании.
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
    <div class="mx-auto w-full rounded-2xl bg-white xl:py-2 py-0 mb-2 transition-all shadow-md hover:-translate-y-[2px]">
      <Disclosure as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between items-center rounded-lg bg-purple-100 xl:px-12 px-3 py-2 text-left text-purple xl:text-2xl text-xs font-semibold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Сколько людей нужно, чтобы управлять сервисом?</span>
          <img src="@/assets/triangelTop.svg" alt="svg" class="transition-all w-[6px] h-[6px] xl:w-auto xl:h-auto" :class="open ? 'rotate-180 transform' : ''">
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="xl:px-12 px-4 xl:pt-4 xl:pb-2 py-1 pt-2 xl:text-base text-[8px] leading-3 text-purple">
            Чтобы качественно управлять сервисом достаточно одного сотрудника hr-отдела, способного уделять этой задаче несколько часов в день. <br/>
            Саппорт и пополнение нематериального контента мы полностью берем на себя. 
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Quest&Answ'
}
</script>
<style>
  
</style>