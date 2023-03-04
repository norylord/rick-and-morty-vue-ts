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
const setOption = (e?: any) => {
  emit('select', e.target.value)
}
</script>

<style lang='sass'>
.ui-select
  padding: 16px 32px
  background: #656565
  font-size: 24px
  border: none
  border-radius: 8px
  font-weight: 300
</style>