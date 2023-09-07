<script setup>
import { ref } from 'vue';
import {
	getCountryCodeForRegionCode,
} from 'awesome-phonenumber'

const phone = ref('');
let phoneRef = ref()
function submit(){
    console.log(phone)
    console.log(phoneRef.value)
}
function countryFunc(e){
    console.log(e)
    console.log( getCountryCodeForRegionCode( e ))
}


</script>

<template>

  <div style="margin: 0 auto; width: 430px;">
    <v-phone-input ref="phoneRef" v-model="phone"  @update:country="countryFunc" />
    <v-btn @click="submit" block class="mt-2">Submit</v-btn>
  </div>

</template>
