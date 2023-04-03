<script setup>
import {ref, onMounted} from 'vue'
const { stringContent } = defineProps(({
  stringContent: {
    type: Array,
    required: true
  }
}))
const runningString = ref('')
const lineIndex = ref(-1)
function startLooping() {
  if (lineIndex.value+1 >= stringContent.length) {
    lineIndex.value = 0
  } else {
    lineIndex.value++
  }
  for (let i = 0; i < stringContent[lineIndex.value].length; i++) {
    setTimeout(() => {
      runningString.value += stringContent[lineIndex.value][i]
    }, 50 * i)
  }
  setTimeout(() => {
    for (let i = stringContent[lineIndex.value].length; i >= 0; i--) {
      setTimeout(() => {
        runningString.value = runningString.value.slice(0, -1);
      }, 25 * (stringContent[lineIndex.value].length - i))
    }
  }, 50 * stringContent[lineIndex.value].length + 1000)
  setTimeout(() => {
    startLooping()
  }, 50 * stringContent[lineIndex.value].length + 1050 + 25 * (stringContent[lineIndex.value].length))
}

onMounted(() => {
  startLooping()
})
</script>

<template>
<p class="xl:h-16 h-9 xl:w-[320px] w-[237px] mb-6 xl:text-2xl text-sm font-normal">
  {{runningString}}
</p>
</template>

<script>
export default {
  name: "RunningLine"
}
</script>

<style scoped>

</style>