<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
            class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogPanel
                class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-10 px-14 text-left align-middle shadow-xl transition-all"
            >
              <div class="form" v-show="!isSendingSuccess">
                <DialogTitle
                    as="h3"
                    class="text-2xl font-normal text-center text-purple leading-6 mb-5"
                >
                  Мы свяжемся с Вами в течение часа
                </DialogTitle>
                <p class="font-light italic text-center mb-9">Поля со звездочкой обязательные для заполнения</p>
                <form class="flex flex-col justify-start items-scratch" action="handler.php" method="post" @submit.prevent="onSubmit()">
                  <input class="input h-14 mb-4" placeholder="Ваше имя*" required v-model="formData.name"/>
                  <input class="input h-14 mb-4" placeholder="Телефон в формате +7 (777) 777 77 77*" v-model="formData.tel" required/>
                  <input class="input h-14 mb-4" placeholder="E-mail*" v-model="formData.mail" required/>
                  <input class="input h-14 mb-4" placeholder="Название компании*" v-model="formData.company" required/>
                  <input class="input h-14 mb-4" placeholder="Количество сотрудников" v-model="formData.employeesNum"/>
                  <textarea class="input h-56 rounded-xl mb-8" v-model="formData.comment"
                            placeholder="Комментарий (например, когда Вам было бы удобно провести встречу)"></textarea>
                  <input
                      type="submit"
                      class="button__purple mt-4 mx-auto flex justify-center leading-4 hover:cursor-pointer"
                      value="Отправить"
                  />
                </form>
              </div>
              <div class="success py-4" v-show="isSendingSuccess">
                <img src="@/assets/confetti.svg" alt="confetti" class="-z-10 absolute -left-0 -top-0 w-[576px] h-[272px]">
                <p class="text-center items-baseline text-2xl font-normal z-10">Благодарим за интерес к нашему сервису. Встрече быть. Мы скоро свяжемся с Вами. А пока, пожалуйста, примите от нас <a class="font-semibold text-2xl underline text-pink_light hover:cursor-pointer" href="https://loyal.gift/p/TeN5u8A9" target="_blank">небольшой подарок!</a></p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import axios from 'axios'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {ref} from 'vue'


const apiUrl = 'https://youtube.com/'

const formData = ref({
  name: '',
  tel: '',
  mail: '',
  company: '',
  employeesNum: '',
  comment: ''
})

const { isOpen } = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const isSendingSuccess = ref(false)

function closeModal() {
  emit('close')
  setTimeout(() => {
    isSendingSuccess.value = false
  }, 300)
}

function onSubmit() {
  axios.post(apiUrl, Object.values(formData.value))
    .then((res) => {
      isSendingSuccess.value = true
    })
    .catch((error) => {
      isSendingSuccess.value = true
    })
}
</script>