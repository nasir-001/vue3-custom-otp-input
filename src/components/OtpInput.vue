<template>
  <div class="input-wrapper">
    <div v-for="(value, index) in otpValues" :key="index">
      <input
        v-model="otpValues[index]"
        maxlength="1"
        class="otp-input"
        :style="inputStyles"
        type="text"
        @input="event => handleInput(event, index)"
        @keydown.delete="handleBackspace(index)"
        ref="inputRefs"
      />
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, nextTick, onMounted, type CSSProperties } from 'vue';

interface Props {
  numberOfInput: number;
  inputStyles?: CSSProperties;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'onChange', value: string): void;
  (e: 'onComplete', value: string): void;
}>();

const otpValues = ref<string[]>(Array(props.numberOfInput).fill(''));
const inputRefs = ref<(HTMLInputElement | null)[]>([]);

const handleInput = (event: Event, index: number) => {
const target = event.target as HTMLInputElement;
const value = target.value;
otpValues.value[index] = value;

if (value && index < props.numberOfInput - 1) {
  nextTick(() => {
  inputRefs.value[index + 1]?.focus();
  });
}

const nonEmptyString = otpValues.value.filter(val => val !== '').join('');
  emit('onChange', nonEmptyString);

  if (nonEmptyString.length === props.numberOfInput) {
    emit('onComplete', nonEmptyString);
  }
};

const handleBackspace = (index: number) => {
  if (index > 0 && otpValues.value[index] === '') {
    nextTick(() => {
      inputRefs.value[index - 1]?.focus();
    });
  }
};

onMounted(() => {
  if (inputRefs.value[0]) {
    inputRefs.value[0].focus();
  }
});
</script>
  