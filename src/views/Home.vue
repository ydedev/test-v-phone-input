<script setup>
import { ref } from 'vue';

const phone = ref('');
</script>

<template>

  <div style="margin: 0 auto; width: 430px;">
    <v-phone-input v-model="phone" />
  </div>

</template>