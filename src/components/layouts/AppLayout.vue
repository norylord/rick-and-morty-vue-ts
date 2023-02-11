<template>
  <div class="wrapper">
    <slot name="main__content"></slot>
    <slot name="sidebar"></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang='sass'>
.wrapper
  width: 100vw
  height: 100vh
  overflow: hidden
  position: relative
  background: radial-gradient(84.73% 147.58% at 92.54% 7.63%, rgb(76, 38, 99) 44.89%, rgb(121, 5, 53) 100%)
</style>