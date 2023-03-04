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
import {ref} from 'vue';
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
  background: transparent
  border: none
  border-bottom: 2px solid #6d6d76
  transition: all 0.2s ease-in

  &:focus
    border-bottom: 2px solid #40be78
</style>