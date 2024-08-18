<script setup lang="ts">
import { ref } from 'vue';
import OtpInput from './components/OtpInput.vue';

// State to store the OTP value
const otpValue = ref<string>('');

// Method to handle OTP change
const handleOtpChange = (value: string) => {
  otpValue.value = value;
  console.log('OTP changed:', value);
};

// Method to handle OTP completion
const handleOtpComplete = (value: string) => {
  console.log('OTP complete:', value);
};
</script>

<template>
  <div>
    <OtpInput 
      :numberOfInput="6"
      @onChange="handleOtpChange"
      @onComplete="handleOtpComplete"
    />
  </div>
</template>
