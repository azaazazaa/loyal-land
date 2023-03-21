<script setup>

</script>

<template>
  <header class="w-full h-20 flex justify-around items-center shadow-lg bg-white mb-10">
    <div class="flex justify-start items-center">
      <div class="logo mr-20">
        <img src="@/assets/loyal_gift.svg" alt="LoyalGift" class="relative -top-1">
      </div>
      <ul class="text-lg flex justify-start items-center text-header_links">
        <li class="mr-5">
          <router-link to="/loyal-land" class="leading-5 hover:border-b-2 hover:border-purple hover:inline-block hover:h-5 transition-all">Для HR</router-link>
        </li>
        <li class="mr-5">
          <router-link to="/loyal-land/marketing" class="leading-5 hover:border-b-2 hover:border-purple hover:inline-block hover:h-5 transition-all">Для маркетинга</router-link>
        </li>
        <li class="mr-5">
          <router-link to="/loyal-land/self" class="leading-5 hover:border-b-2 hover:border-purple hover:inline-block hover:h-5 transition-all">Для себя</router-link>
        </li>
      </ul>
    </div>
    <div>
      <button class="button h-10 w-72 transition-all"><a href="https://loyal.gift/login">АВТОРИЗОВАТЬСЯ</a></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp"
}
</script>

<style scoped>
  .router-link-active{
    font-weight: 600;
    line-height: 20px;
    border-bottom: 2px #6750A4 solid;
    color: #6750A4;
    height: 20px;
    display: inline-block;
  }
</style>