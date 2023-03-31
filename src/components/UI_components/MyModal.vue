<script setup>
import axios from 'axios'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {ref, computed} from 'vue'
import { useField } from 'vee-validate';
import apiUrl from '@/plugins/getFormApiUrl.js'

const formData = ref({
  name: useField('', nameField),
  tel: useField('', phoneField),
  mail: useField('', mailField),
  company: useField('', requiredField),
  employeesNum: '',
  comment: ''
})

const submitError = ref('')

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
  const tel = formData.value.tel.value.replace(/[^\d]/g, '')
  let editData = {...formData.value}
  editData.tel = tel
  editData.company = editData.company.value
  editData.mail = editData.mail.value
  editData.name = editData.name.value
  let postData = Object.values(editData)
  axios.post(apiUrl(), postData)
    .then((res) => {
      isSendingSuccess.value = true
    })
    .catch((error) => {
      submitError.value = error.message
    })
}
function phoneField(value) {
  if (!value) {
    return 'Поле обязательно для заполнения';
  }
  if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(value)) {
    return 'Неверный формат номера телефона';
  }
  return true;
}

function nameField(value) {
  if (!value) {
    return 'Поле обязательно для заполнения';
  }
  if (/[0-9]/.test(value)) {
    return 'Имя не должно содержать цифры'
  }
  return true
}

function requiredField(value) {
  if (!value) {
    return 'Поле обязательно для заполнения'
  }
  return true;
}

function mailField(value) {
  if (!value) {
    return 'Поле обязательно для заполнения'
  }
  return true;
}

const isFormValid = computed(() => {
  if (!formData.value.tel.errorMessage && 
      !formData.value.mail.errorMessage &&
      !formData.value.name.errorMessage &&
      !formData.value.company.errorMessage) {
        return false
      }
  return true
})
</script>

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
                  <input class="input h-14" placeholder="Ваше имя*" required 
                    @input="formData.name.handleChange" 
                    v-model="formData.name.value"
                    :class="{'border-red-500': !!formData.name.errorMessage}"/>
                  <span class="text-red-500 text-sm">{{ formData.name.errorMessage }}</span>
                  <input class="input h-14 mt-4" placeholder="Телефон в формате +7 (777) 777 77 77*" 
                        @input="formData.tel.handleChange" 
                        v-model="formData.tel.value" required
                        :class="{'border-red-500': !!formData.tel.errorMessage}"/>
                  <span class="text-red-500 text-sm">{{ formData.tel.errorMessage }}</span>
                  <input class="input h-14 mt-4" placeholder="E-mail*" type="email" 
                        @input="formData.mail.handleChange" 
                        v-model="formData.mail.value" required
                        :class="{'border-red-500': !!formData.mail.errorMessage}"/>
                  <span class="text-red-500 text-sm">{{ formData.mail.errorMessage }}</span>
                  <input class="input h-14 mt-4" placeholder="Название компании*" 
                        @input="formData.company.handleChange" 
                        v-model="formData.company.value" required
                        :class="{'border-red-500': !!formData.company.errorMessage}"/>
                  <span class="text-red-500 text-sm">{{ formData.company.errorMessage }}</span>
                  <input class="input h-14 mt-4" placeholder="Количество сотрудников" 
                        type="number" v-model="formData.employeesNum"/>
                  <textarea class="input h-56 rounded-xl mt-4 mb-4" v-model="formData.comment"
                            placeholder="Комментарий (например, когда Вам было бы удобно провести встречу)"></textarea>
                            <span class="text-red-500 text-sm">{{ submitError }}</span>
                  <input
                      type="submit"
                      class="button__purple mt-4 mx-auto flex justify-center leading-4 hover:cursor-pointer"
                      value="Отправить"
                      :disabled="isFormValid"
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