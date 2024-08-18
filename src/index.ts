import type { App } from 'vue';
import OtpInput from './components/OtpInput.vue';

export default {
  install(app: App) {
    app.component('MyComponent', OtpInput);
  }
};

export { OtpInput };