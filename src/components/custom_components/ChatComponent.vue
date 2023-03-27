<script setup>

</script>
<template>
  <div class="max-w-max rounded-3xl px-5 py-2 bg-white shadow-customChat flex justify-center items-center relative">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </div>
</template>
<script>
export default {
  name: 'ChatComponent'
}
</script>
<style lang="">
  
</style>