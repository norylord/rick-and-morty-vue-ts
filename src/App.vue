<template>
  <AppLayout>
    <template #main__content>
      <router-view/>
    </template>
    <template #sidebar>
      <SideBar :character="store.selectedCharacter"/>
    </template>
  </AppLayout>
</template>

<script lang="ts" setup>
import AppLayout from "@/components/layouts/AppLayout.vue";
import SideBar from "@/components/app/SideBar.vue";



import {onMounted, ref} from "vue";
import RequestService from "@/api/RequestService";
import {useCharacterStore} from "@/store";
import router from "@/router";
import {useRoute} from "vue-router";

const route = useRoute()
function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
onMounted(async () => {
  await RequestService.getCharacterById(getRandomInt(1, 826)).then(res => store.selectCharacter(res.data))
  await RequestService.getAllCharacters().then(res => store.selectAllCharacters(res.data))
})

const store = useCharacterStore()


</script>

<style lang='sass'>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap')
@import "@/assets/styles/colors.sass"
*
  box-sizing: border-box
  margin: 0
  padding: 0
  font-family: 'Roboto', sans-serif
  color: $text-color
  scrollbar-color: #616161 transparent
  ::-webkit-scrollbar
    width: 10px
    background-color: #1f1f5d

  ::-webkit-scrollbar-track
    background: transparent
    box-shadow: 0 0 2px rgba(0, 0, 0, .2) inset

  ::-webkit-scrollbar-thumb
    background: #616161
    border-radius: 2px
  ::-webkit-scrollbar-thumb:hover
    background: #616161

.section
  height: 100vh
  width: 60vw
  position: relative
</style>