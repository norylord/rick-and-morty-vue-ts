<template>
  <AppLayout>
    <template #main__content>
      <router-view/>
    </template>
    <template #sidebar>
      <SideSection >
        <LoadindIcon v-if="store.isLoading"/>
        <CharacterDetails v-else/>
      </SideSection>
    </template>
  </AppLayout>
</template>

<script lang="ts" setup>
import AppLayout from "@/components/layouts/AppLayout.vue";
import {onMounted} from "vue";
import RequestService from "@/api/RequestService";
import {useCharacterStore} from "@/store";
import SideSection from "@/components/app/SideSection.vue";
import CharacterDetails from "@/components/app/characters/CharacterDetails.vue";
import {useRoute} from "vue-router";
import LoadindIcon from "@/assets/icons/LoadindIcon.vue";


const store = useCharacterStore()

function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const route = useRoute()
onMounted(async () => {
  await store.startLoading()
  await RequestService.getCharacterById(getRandomInt(1, 826)).then(res => store.selectCharacter(res.data)).then(() => console.log(123))
  await RequestService.getAllCharacters().then(res => store.selectAllCharacters(res.data)).then(() => store.stopLoading())
})




</script>

<style lang='sass'>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap')
@import "@/assets/variables/_colors.sass"
@import "@/assets/styles/_app.sass"
</style>