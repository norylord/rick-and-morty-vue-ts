<template>
  <div class="character-details" v-if="store.selectedCharacter.hasOwnProperty('location')">
    <img :src="store.selectedCharacter.image" class="character-details-image" alt="character"/>
    <p class="character-details-name character-details-elem">{{store.selectedCharacter.name}}</p>
    <p class="character-details-info character-details-elem"> {{store.selectedCharacter.status}} {{store.selectedCharacter.species}}</p>
    <p class="character-details-info character-details-elem">{{store.selectedCharacter.gender}}</p>
    <p class="character-details-label character-details-elem">Last known location:</p>
    <p class="character-details-info character-details-elem">{{store.selectedCharacter.location.name}}</p>
    <p class="character-details-label character-details-elem">First seen in:</p>
    <p class="character-details-info character-details-elem" v-if="characterFirstEpisode">{{characterFirstEpisode}}</p>
    <UIButton @click="openCharactersPage" class="side-section__link">
      Другие персонажи
    </UIButton>
  </div>

</template>

<script lang="ts" setup>

import UIButton from "@/components/ui/button/UIButton.vue";
import {ref, watch} from "vue";
import {useCharacterStore} from "@/store";
import router from "@/router";
import RequestService from "@/api/RequestService";
const store = useCharacterStore()


const characterFirstEpisode = ref('')

const openCharactersPage = () => {
  store.clearCharacter()
  router.push('/characters')
}

watch(store.selectedCharacter, async () => {
  console.log(123);
  
  characterFirstEpisode.value = await RequestService.getEpisode(store.selectedCharacter.episode[0]).then(res => res.data.name)
})

</script>

<style lang='sass'>
.character-details
    display: flex
    z-index: 1000
    flex-direction: column
    align-items: start
    &-image
      width: 220px
      height: 220px
    &-elem
      font-weight: 300
      margin-top: 16px
    &-name
      font-size: 42px
    &-info
      font-size: 24px
    &-label
      font-weight: 300
      font-size: 16px
</style>