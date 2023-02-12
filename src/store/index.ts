import {ICharacter} from "@/types/characters/charactres";
import {defineStore} from "pinia";


interface IStore {
  selectedCharacter: ICharacter
  characters: ICharacter[],
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const useCharacterStore = defineStore({
  id: 'characters',
  state: (): IStore => ({
    characters: [],
    selectedCharacter: {},
    isLoading: false,
    isError: false,
    errorMessage: '',
  }),
  getters: {
    getSelectedCharacter (): ICharacter {
      return this.selectedCharacter
    },
    getAllCharacters (): ICharacter[] {
      return this.characters
    }
  },
  actions: {
    selectCharacter (character:ICharacter){
      this.selectedCharacter = character
    },
    selectAllCharacters (characters:ICharacter[]){
      this.characters = characters
    },
    clearCharacter (){
      this.selectedCharacter = {}
    },
    startLoading() {
      this.isLoading = true
    },
    stopLoading() {
      this.isLoading = false
    },
    setErrorMessage(message: string){
      this.errorMessage = message
    }
  }
})
