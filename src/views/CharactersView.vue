<template>
  <section class="characters section">
    <div class="characters__filter">
      <UIInput class="characters__filter-name" v-model="store.searchConfig.name" type="string"
               placeholder="Введите имя персонажа"/>
      <UISelect class="characters__filter-status" @select="setStatus" :options="CharactersStatus"/>
    </div>
    <CharactersIndex v-if="store.errorMessage === ''"/>
    <h1 v-else class="characters__error">Ничего не найдено</h1>

  </section>
</template>

<script lang="ts" setup>

import {CharactersStatus} from "@/types/characters/charactres";
import {watch} from "vue";
import {useCharacterStore} from "@/store";
import UIInput from "@/components/ui/input/UIInput.vue";
import UISelect from "@/components/ui/select/UISelect.vue";
import RequestService from "@/api/RequestService";
import CharactersIndex from "@/components/app/characters/CharactersIndex.vue";


const setStatus = (status: CharactersStatus) => {
  store.searchConfig.status = status
}

const store = useCharacterStore()

watch(store.searchConfig, async () => {
  await RequestService.getAllCharacters(store.searchConfig).then(res => store.selectAllCharacters(res.data)).then(() => store.setErrorMessage(''))
})
</script>

<style lang='sass'>
.characters
  background: transparent

  &__error
    text-align: center
    font-weight: 300

  &__filter
    width: 100%
    height: 30vh
    padding: 16px 48px
    display: flex
    flex-direction: column
    align-items: start

    &-name
      margin: 16px 0

    &-status
      margin: 16px 0
</style>