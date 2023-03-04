<template>
  <main class="main">
    <slot name="main__content"></slot>
    <slot name="sidebar"></slot>
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang='sass'>
.main
  width: 100vw
  height: 100vh
  display: flex
  overflow: hidden
  position: relative
</style>