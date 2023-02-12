<template>
  <select class="ui-select">
    <option selected disabled value="" v-if="false">Выберите статус</option>
    <option :key="opt" :value="opt" v-for="opt in options" @click="setOption">{{ opt === '' ? 'None' : opt }}</option>
  </select>
</template>

<script lang="ts" setup>


import {defineEmits, defineProps} from "vue";

interface Props {
  options: object
}
const props = defineProps<Props>()



const emit = defineEmits(['select'])
const setOption = (e?:any) => {
  emit('select', e.target.value)
}
</script>

<style lang='sass'>
.ui-select
  padding: 16px 32px
  background: linear-gradient(90deg, #333047 0%, #3F4751 100%)
  border: 2px solid #484853
  box-shadow: 4px 4px 25px 5px rgba(0, 0, 0, 0.25)
  border-radius: 1000px
  width: 30%
  border-bottom: 2px solid #353535
  -moz-appearance: none /* Firefox */
  -webkit-appearance: none /* Safari and Chrome */
  appearance: none
</style>