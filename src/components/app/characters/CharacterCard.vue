<template>
  <div class="card" @click="selectCharacter(character.id)">
    <h1  :key="character.id">{{character.name}}</h1>
  </div>
</template>

<script lang="ts" setup>

import {Character} from "@/types/characters/charactres";
import {defineProps} from "vue";
import RequestService from "@/api/RequestService";
import {useCharacterStore} from "@/store";

interface Props {
  character: Character
}


const store = useCharacterStore()
const selectCharacter = async (id:number) => {
  await RequestService.getCharacterById(id).then(res => store.selectCharacter(res.data))
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
</style>