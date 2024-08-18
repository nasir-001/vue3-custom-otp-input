## Vue3 Custom OTP Input

A Vue 3 component library for creating customizable OTP (One-Time Password) input fields.

## Installation

You can install the library via npm or yarn.

### Using npm

```bash 
npm install vue3-custom-otp-input
```

### Using yarn

```bash
yarn add vue3-custom-otp-input
```

## Usage
Importing and Registering the Component

In your main entry file (e.g., main.ts), import and register the component globally:

```bash
import { createApp } from 'vue';
import App from './App.vue';
import OtpInput from 'vue3-custom-otp-input';

const app = createApp(App);
app.component('OtpInput', OtpInput);
app.mount('#app');
```

### Using the Component in Your Templates

You can now use the OtpInput component in your Vue templates:

```bash
<template>
  <div>
    <OtpInput
      :numberOfInput="6"
      @onChange="handleChange"
      @onComplete="handleComplete"
      :inputStyles="{ borderColor: borderColor }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OtpInput from 'vue3-custom-otp-input';

const borderColor = ref('green');

const handleChange = (value: string) => {
  console.log('Current OTP value:', value);
};

const handleComplete = (value: string) => {
  console.log('OTP Complete:', value);
};
</script>
```

### Props

| Name | Description |
| --- | --- |
| numberOfInput | The number of OTP input fields to render. Default is `4` |
| inputStyles | Custom CSS styles to apply to the OTP input fields. For example, `{ borderColor: 'red' }` |

### Events

| Name | Description |
| --- | --- |
| onChange | Emitted when the value of any input changes. Receives the current OTP value as a parameter. |
| onComplete | Emitted when all OTP inputs are filled. Receives the complete OTP value as a parameter |

## Customization

You can customize the appearance of the OTP input fields using the style prop. For example:

```bash
<OtpInput
  :numberOfInput="6"
  :inputStyles="{ borderColor: 'green', borderRadius: '50% !important' }"
/>
```