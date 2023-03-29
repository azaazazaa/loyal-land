<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
  <footer class="bg-purple h-[152px] flex justify-center items-center px-36">
    <ul class="container flex justify-between items-center">
      <li><a class="text-lg uppercase text-white" href="/">О нас</a></li>
      <Popover class="relative">
        <PopoverButton class="text-lg uppercase text-white">Конаткты</PopoverButton>
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
        <PopoverPanel class="absolute z-10 left-1/2 mt-3 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl bottom-8 bg-pink w-52 rounded-lg">
          <div class="pl-2 pt-2">
            <div class="flex justify-start items-center mb-2 hover:cursor-pointer hover:bg-pink_light pl-2 mr-2 py-2 rounded-md">
              <img src="@/assets/telIcon.svg" alt="icon" class="mr-2">
              <a href="tel:+74994509095" class="text-base font-normal text-white">+74994509095</a>
            </div>
            <div class="flex justify-start items-center mb-2 hover:cursor-pointer hover:bg-pink_light pl-2 mr-2 py-2 rounded-md">
              <img src="https://static.tildacdn.com/tild3832-3934-4663-a130-303135623931/2.svg" alt="icon" class="mr-2">
              <a href="https://t.me/LoyalGift_Bot" class="text-base font-normal text-white" target="_blank">Telegram</a>
            </div>
            <div class="flex justify-start items-center mb-2 hover:cursor-pointer hover:bg-pink_light pl-2 mr-2 py-2 rounded-md">
              <img src="https://static.tildacdn.com/tild3066-6266-4130-b263-366430646532/3.svg" alt="icon" class="mr-2">
              <a href="https://wa.me/79299296188" class="text-base font-normal text-white" target="_blank">WhatsApp</a>
            </div>

          </div>
        </PopoverPanel>
        </transition>
      </Popover>
      <li><a class="text-lg uppercase text-white hover:cursor-pointer" @click="$emit('openModal')">Форма для заказа звонка</a></li>
      <li><a class="text-lg uppercase text-white" href="http://loyalgift.ru/page27809283.html">Соглашение</a></li>
      <li><a class="text-lg uppercase text-white" href="#">(С) loyalgift 2023</a></li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style>
  
</style>