<template>
  <div class="card" @click="selectCharacter(character.id)">
    <img :src="character.image" alt="" class="card__img">
    <div class="card__desc">
      <h1 class="card__desc-name" :key="character.id">{{character.name}}</h1>
      <p class="card__desc-status">{{character.status}} {{character.species}}</p>
      <p>{{character.gender}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ICharacter} from "@/types/characters/charactres";
import {defineProps} from "vue";
import RequestService from "@/api/RequestService";
import {useCharacterStore} from "@/store";

interface Props {
  character: ICharacter
}


const store = useCharacterStore()
const selectCharacter = async (id:number) => {
  store.startLoading()
  await RequestService.getCharacterById(id).then(res => store.selectCharacter(res.data)).then(() => store.stopLoading())
}


const props = defineProps<Props>()

</script>

<style lang='sass'>
.card
  background: linear-gradient(90deg, #333047 0%, #3F4751 100%)
  border: 2px solid #484853
  box-shadow: 4px 4px 15px 5px rgba(0, 0, 0, 0.25)
  border-radius: 1000px
  margin: 12px 0
  padding: 24px
  cursor: pointer
  display: flex
  justify-content: center
  flex-wrap: wrap
  max-width: 600px
  &__img
    height: 100%
    max-height: 200px
    border-radius: 10000px
  &__desc
    min-width: 200px
    flex: 1
    padding: 24px
    display: flex
    flex-flow: column nowrap
    align-items: center
    text-align: center
    &-name
      font-weight: 300
      font-size: 32px
    &-status
      font-weight: 300
      font-size: 24px
      margin: 12px 0
</style>