<template>
  <div class="card" @click="selectCharacter(character.id)">
    <img :src="character.image" alt="" class="card__img">
    <div class="card__desc">
      <h1 class="card__desc-name" :key="character.id">{{ character.name }}</h1>
      <p class="card__desc-status">{{ character.status }} {{ character.species }}</p>
      <p>{{ character.gender }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>


import type {ICharacter} from 'types/character'
import {defineProps} from "vue";
import RequestService from "@/api/RequestService";
import {useCharacterStore} from "@/store";

interface Props {
  character: ICharacter
}


const store = useCharacterStore()
const selectCharacter = async (id: number) => {
  store.startLoading()
  await RequestService.getCharacterById(id).then(res => store.selectCharacter(res.data)).then(() => store.stopLoading())
}


const props = defineProps<Props>()

</script>

<style lang='sass'>
.card
  background: #515151
  margin: 12px
  cursor: pointer
  display: flex
  flex-direction: column
  justify-content: center
  flex-wrap: wrap
  max-width: 300px
  flex: 1 0 50%
  border-radius: 16px
  transition: transform .2s ease-in-out, box-shadow .2s ease-in-out

  &:hover
    transform: scale(1.05)

  &__img
    height: 100%
    border-radius: 16px 16px 0 0
    max-height: 300px

  &__desc
    min-width: 200px
    flex: 1
    padding: 24px
    display: flex
    flex-flow: column nowrap

    &-name
      font-weight: 300
      font-size: 32px
      transition: color .1s ease-in-out

      &:hover
        color: #40be78

    &-status
      font-weight: 300
      font-size: 24px
      margin: 12px 0
</style>