<template>
  <section class="home section">
    <div class="home__img"></div>
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
  &__img
    position: absolute
    bottom: 0
    height: 90vh
    width: 100vw
    z-index: 100
    background-position-x: 30%
    background-position-y: bottom
    background-repeat: no-repeat
    background-image: url("@/assets/img/Group 3.svg")
</style>