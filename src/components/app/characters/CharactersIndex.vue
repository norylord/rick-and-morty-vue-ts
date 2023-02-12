<template>
  <div class="characters-wrapper">
    <CharacterList/>
  </div>
</template>

<script lang="ts" setup>

import CharacterList from "@/components/app/characters/CharacterList.vue";
</script>

<style lang='sass'>
.characters
  &-wrapper
    width: 100%
    height: 70vh
    padding: 16px
    overflow-y: scroll
</style>