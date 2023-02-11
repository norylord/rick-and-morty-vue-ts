<template>
  <section class="characters section">
    <div class="characters__filter">
      <TheInput class="characters__filter-name" v-model="cfg.name" type="string" placeholder="Введите имя персонажа"/>
      <TheSelect class="characters__filter-status" @select="setStatus" :options="CharactersStatus"/>
    </div>
    <div class="characters__wrapper">
      <CharacterList/>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {CharactersStatus, SearchConfig} from "@/types/characters/charactres";
import {reactive, watch} from "vue";
import {useCharacterStore} from "@/store";
import TheInput from "@/components/ui/TheInput.vue";
import TheSelect from "@/components/ui/select/TheSelect.vue";
import RequestService from "@/api/RequestService";
import CharacterList from "@/components/app/characters/CharacterList.vue";

const cfg = reactive<SearchConfig>({
  name: '',
  status: CharactersStatus.None,
  page: 1
})

const setStatus = (status:CharactersStatus) => {
  cfg.status = status
}

const store = useCharacterStore()

watch(cfg, async ()=> {
  await RequestService.getAllCharacters(cfg).then(res => store.selectAllCharacters(res.data))
})


</script>

<style lang='sass'>
.characters
  background: linear-gradient(180deg, #404952 0%, #2A203F 100%)
  &__filter
    width: 100%
    height: 30vh
    padding: 16px
    display: flex
    flex-direction: column
    &-name
      margin: 16px 0
    &-status
      margin: 16px 0
  &__wrapper
    width: 100%
    height: 70vh
    padding: 16px
    overflow-y: scroll
</style>