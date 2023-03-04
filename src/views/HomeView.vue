<template>
  <section class="home section">
    <h1 class="home-title">Rick and Morty</h1>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import RequestService from "@/api/RequestService";

const state = ref()

onMounted(async () => {
  state.value = await RequestService.getAllCharacters()
})
</script>

<style lang='sass'>
.home
  &-title
    font-weight: 300
    font-size: 42px

  &__img
    position: relative
    height: 100vh
    width: 100vw
    z-index: 100
    background-position-x: 30%
    background-position-y: bottom
    background-repeat: no-repeat
    background-image: url("@/assets/img/cover.svg")
</style>