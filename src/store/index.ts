import { createStore } from 'vuex'
import {Character, Characters} from "@/types/characters/charactres";
import {defineStore} from "pinia";


interface Store {
  selectedCharacter: Character
  characters: Character[]
}

export const useCharacterStore = defineStore({
  id: 'characters',
  state: (): Store => ({
    characters: [],
    selectedCharacter: {}
  }),
  getters: {
    getSelectedCharacter (): Character {
      return this.selectedCharacter
    },
    getAllCharacters (): Character[] {
      return this.characters
    }
  },
  actions: {
    selectCharacter (character:Character){
      this.selectedCharacter = character
    },
    selectAllCharacters (characters:Character[]){
      this.characters = characters
    },
    clearCharacter (){
      this.selectedCharacter = {}
    }
  }
})
