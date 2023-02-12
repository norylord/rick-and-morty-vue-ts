<template>
  <section class="characters section">
    <div class="characters__filter">
      <UIInput class="characters__filter-name" v-model="cfg.name" type="string" placeholder="Введите имя персонажа"/>
      <UISelect class="characters__filter-status" @select="setStatus" :options="CharactersStatus"/>
    </div>
    <CharactersIndex v-if="store.errorMessage === ''"/>
    <h1 v-else class="characters__error">Ничего не найдено</h1>
  </section>
</template>

<script lang="ts" setup>
import {CharactersStatus, ISearchConfig} from "@/types/characters/charactres";
import {reactive, watch} from "vue";
import {useCharacterStore} from "@/store";
import UIInput from "@/components/ui/input/UIInput.vue";
import UISelect from "@/components/ui/select/UISelect.vue";
import RequestService from "@/api/RequestService";
import CharactersIndex from "@/components/app/characters/CharactersIndex.vue";

const cfg = reactive<ISearchConfig>({
  name: '',
  status: CharactersStatus.None,
  page: 1
})

const setStatus = (status:CharactersStatus) => {
  cfg.status = status
}

const store = useCharacterStore()

watch(cfg, async ()=> {
  await RequestService.getAllCharacters(cfg).then(res => store.selectAllCharacters(res.data)).then(() => store.setErrorMessage(''))
})


</script>

<style lang='sass'>
.characters
  background: linear-gradient(180deg, #404952 0%, #2A203F 100%)
  &__error
    text-align: center
    font-weight: 300
  &__filter
    width: 100%
    height: 30vh
    padding: 16px
    display: flex
    flex-direction: column
    align-items: start
    &-name
      margin: 16px 0
    &-status
      margin: 16px 0
</style>