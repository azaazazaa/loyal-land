<script setup>

</script>

<template>
  <header class="w-full h-20 flex justify-around items-center shadow-lg bg-white mb-10">
    <div class="flex justify-start items-center">
      <div class="logo mr-20">
        <img src="@/assets/loyal_gift.svg" alt="LoyalGift" class="relative -top-1">
      </div>
      <ul class="text-lg flex justify-start items-center text-header_links">
        <li class="mr-5"><a href="">Для HR</a></li>
        <li class="mr-5"><a href="">Для маркетинга</a></li>
        <li class="mr-5"><a href="">Для себя</a></li>
      </ul>
    </div>
    <div>
      <button class="button h-10 w-72"><a href="https://loyal.gift/login">АВТОРИЗОВАТЬСЯ</a></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp"
}
</script>

<style scoped>

</style>