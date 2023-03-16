<template>
  <div class="flex justify-between items-center mb-10">
    <img src="@/assets/opinion.png" alt="opinionDesc">
    <div class="flex flex-col justify-center items-stretch">
      <h1 class="mb-12 uppercase">Что наши клиенты говорят о нас</h1>
      <p class="mb-16">Сказать, что отзывы являются мощным инструментом было 
        бы значительным преуменьшением. Несколько предложений в обзоре порой оказывают большее влияние на потребителей, чем целый сайт. 
        Разница в одну звезду или даже ползвезды может быть достаточной для того, чтобы покупатель выбрал не вас, а вашего конкурента.
      </p>
      <div class="comment flex justify-start items-center">
        <img src="@/assets/avatar.png" alt="avatar" class="w-20 h-20 mr-6">
        <div class="flex flex-col justify-evenly items-start">
          <h3 class="text-base font-bold text-purple">Анастасия Старовойцева</h3>
          <p>HRD “Очень важная и крупная компания”</p>
          <img src="@/assets/stars.svg" alt="starsMark" class="h-5">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OpinionPart"
}
</script>