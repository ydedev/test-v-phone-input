/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { VAutocomplete } from 'vuetify/components';

import 'flag-icons/css/flag-icons.min.css';
import 'v-phone-input/dist/v-phone-input.css';
import { createVPhoneInput } from 'v-phone-input';
const app = createApp(App)
// IMPORTANT: required when treeshaking Vuetify components.
app.component('VAutocomplete', VAutocomplete);

const vPhoneInput = createVPhoneInput({
  enableSearchingCountry: true,
});


registerPlugins(app)

app.mount('#app')
app.use(vPhoneInput);