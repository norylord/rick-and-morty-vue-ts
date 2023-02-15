<template>
  <div class="characters-list">
    <CharacterCard v-for="character in store.characters.results" :key="character.id" :character="character"/>
  </div>
</template>

<script lang="ts" setup>
import {useCharacterStore} from "@/store";
import CharacterCard from "@/components/app/characters/CharacterCard.vue";

const store = useCharacterStore()

</script>

<style lang='sass'>
.characters-list
  display: flex
  flex-flow: row wrap
  justify-content: space-around

  &__observer
    background: red
    width: 100%
    height: 20px
</style>