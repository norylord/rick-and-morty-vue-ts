<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>

</script>

<style lang='sass'>
@import "@/assets/styles/colors.sass"

.button
  padding: 16px 32px
  display: flex
  justify-content: center
  align-items: center
  color: $text-color
  background: linear-gradient(90deg, #333047 0%, #3F4751 100%)
  border: 2px solid #484853
  box-shadow: 4px 4px 25px 5px rgba(0, 0, 0, 0.25)
  border-radius: 1000px
  cursor: pointer
  z-index: 1000
  font-weight: 300
  transition: box-shadow .2s ease-in-out, border .2s ease-in-out
  &:hover
    border: 2px solid #705976
    box-shadow: 4px 4px 25px 5px rgba(63, 7, 151, 0.25)
</style>