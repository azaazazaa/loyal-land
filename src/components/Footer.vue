<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
  <footer class="bg-purple xl:h-[152px] flex justify-center items-center xl:px-36 px-10 py-4 xl:py-0">
    <ul class="container flex xl:justify-between justify-start xl:items-center items-start xl:flex-row flex-col">
      <Popover class="relative mb-2">
        <PopoverButton class="xl:text-lg text-xs mb-2 uppercase text-white">Конаткты</PopoverButton>
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
        <PopoverPanel class="absolute z-10 xl:left-1/2 left-0 mt-3 xl:-translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl bottom-8 bg-pink w-60 rounded-lg">
          <div class="pl-2 pt-2">
            <div class="flex justify-start items-center mb-2 hover:cursor-pointer hover:bg-pink_light pl-2 mr-2 py-2 rounded-md">
              <img src="@/assets/telIcon.svg" alt="icon" class="mr-2">
              <a href="tel:+74994509095" class="text-base font-normal text-white">+74994509095</a>
            </div>
            <div class="flex justify-start items-center mb-2 hover:cursor-pointer hover:bg-pink_light pl-2 mr-2 py-2 rounded-md">
              <img src="https://static.tildacdn.com/tild3832-3934-4663-a130-303135623931/2.svg" alt="icon" class="mr-2">
              <a href="https://t.me/mikhail_petrashko" class="text-base font-normal text-white" target="_blank">Telegram</a>
            </div>
            <div class="flex justify-start items-center mb-2 hover:cursor-pointer hover:bg-pink_light pl-2 mr-2 py-2 rounded-md">
              <img src="https://static.tildacdn.com/tild3066-6266-4130-b263-366430646532/3.svg" alt="icon" class="mr-2">
              <a href="https://wa.me/79299296188" class="text-base font-normal text-white" target="_blank">WhatsApp</a>
            </div>

          </div>
        </PopoverPanel>
        </transition>
      </Popover>
      <li class="mb-4"><a class="xl:text-lg text-xs uppercase text-white hover:cursor-pointer" @click="$emit('openModal')">Обратная связь</a></li>
      <li class="mb-4"><a class="xl:text-lg text-xs uppercase text-white" href="http://loyalgift.ru/page27809283.html" target="_blank">Соглашение</a></li>
      <li class="mb-4"><a class="xl:text-lg text-xs uppercase text-white" href="https://docs.google.com/document/d/10lTqOE7uVjFoHpJk4a3GyU5Hck8RQnaV/edit" target="_blank">Политика конфинденциальности</a></li>
      <li class="mb-4"><a class="xl:text-lg text-xs uppercase text-white" href="#">(С) loyalgift 2023</a></li>
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