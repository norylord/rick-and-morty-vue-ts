<template>
      <input
          ref="input"
          :type="type"
          @input="onInput"
          :value="modelValue"
          :placeholder="String(props.placeholder)"
          class="ui-input"
      />
</template>

<script setup lang="ts">
import {  ref } from 'vue';
import {defineEmits, defineProps} from "vue";


interface Props {

  type?:
      | 'text'
      | 'number'
      | 'search'
      | 'password'
      | 'onlyText'
      | 'onlyNumber'
      | 'email'
      | 'phone'
      | 'date'
      | 'onlyTextWithSpace';
  variant?: 'primary' | 'secondary';
  placeholder?: string | number;
  modelValue?: string | number;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const onInput = (e?: any) => {
  emit('update:modelValue', e.target.value);
};
</script>

<style lang='sass'>
.ui-input
  padding: 12px 32px
  font-size: 24px
  margin: 20px 0
  width: 100%
  font-weight: 300
  outline: none
  background: linear-gradient(90deg, #333047 0%, #3F4751 100%)
  border: 2px solid #484853
  box-shadow: 4px 4px 25px 5px rgba(0, 0, 0, 0.25)
  transition: all 0.2s ease-in
  border-radius: 1000px
</style>