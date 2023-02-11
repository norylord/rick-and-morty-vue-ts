<template>
  <div class="sidebar" >
    <div class="sidebar__wrapper" v-if="character.hasOwnProperty('name')">
      <div  class="sidebar__character">
        <img  :src="character.image" class="sidebar__character-image" alt="character"/>
        <h1 class="sidebar__character-name sidebar__character-elem">{{character.name}}</h1>
        <h1 class="sidebar__character-info sidebar__character-elem"> {{character.status}} {{character.species}}</h1>
        <h1 class="sidebar__character-info sidebar__character-elem">{{character.gender}}</h1>
        <h1 class="sidebar__character-label sidebar__character-elem">Last known location:</h1>
        <h1 class="sidebar__character-info sidebar__character-elem">{{character.location.name}}</h1>
        <h1 class="sidebar__character-label sidebar__character-elem">First seen in:</h1>
        <h1 class="sidebar__character-info sidebar__character-elem">{{characterFirstEpisode}}</h1>
      </div>
      <TheButton @click="openCharactersPage" class="sidebar__link">
        Другие персонажи
      </TheButton>
    </div>
    <h1 v-else class="sidebar__character-info">Выберите персонажа </h1>
    <div class="sidebar__actions">
      <TheButton>GitHub</TheButton>
      <TheButton>VK</TheButton>
      <TheButton>Telegram</TheButton>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {defineProps, onMounted, ref, watch} from "vue";
import {Character} from "@/types/characters/charactres";
import TheButton from "@/components/ui/TheButton.vue";
import {useCharacterStore} from "@/store";
import router from "@/router";
import RequestService from "@/api/RequestService";


interface Props {
  character: Character,
}
let props = defineProps<Props>()
const store = useCharacterStore()

const characterFirstEpisode = ref('')

const openCharactersPage = () => {
  store.clearCharacter()
  router.push('/characters')
}

watch(props, async () => {
  characterFirstEpisode.value = await RequestService.getEpisode(props.character.episode[0]).then(res => res.data.name)
})


</script>

<style lang='sass'>
.sidebar
  height: 100vh
  width: 40vw
  position: absolute
  right: 0
  top: 0
  background: linear-gradient(180deg, #404952 0%, #2A203F 100%)
  padding: 100px 100px
  &__wrapper
    width: 100%
    display: flex
    flex-direction: column
  &__link
    margin-top: 30px
  &__actions
    width: 100%
    justify-content: space-around
    position: absolute
    left: 0
    bottom: 24px
    display: flex
  &__character
    display: flex
    z-index: 1000
    flex-direction: column
    &-image
      width: 150px
      height: 150px
    &-elem
      font-weight: 300
      margin-top: 16px
    &-name
      font-size: 36px
    &-info
      font-size: 24px
    &-label
      font-weight: 300
      font-size: 16px

</style>