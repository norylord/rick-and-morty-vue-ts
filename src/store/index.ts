import {defineStore} from "pinia";

import type {ICharacter, ISearchConfig} from 'types/character'


interface IStore {
    selectedCharacter: ICharacter
    characters: ICharacter[],
    isLoading: boolean,
    errorMessage: string,
    searchConfig: ISearchConfig,
}

export const useCharacterStore = defineStore({
    id: 'characters',
    state: (): IStore => ({
        characters: [],
        selectedCharacter: {},
        isLoading: false,
        errorMessage: '',
        searchConfig: {
            name: '',
            status: '',
            page: 1
        }
    }),
    getters: {
        getSelectedCharacter(): ICharacter {
            return this.selectedCharacter
        },
        getAllCharacters(): ICharacter[] {
            return this.characters
        }
    },
    actions: {
        selectCharacter(character: ICharacter) {
            this.selectedCharacter = character
        },
        selectAllCharacters(characters: ICharacter[]) {
            this.characters = characters
        },
        loadMoreCharacters() {
            this.searchConfig.page += 1
        },
        clearCharacter() {
            this.selectedCharacter = {}
        },
        startLoading() {
            this.isLoading = true
        },
        stopLoading() {
            this.isLoading = false
        },
        setErrorMessage(message: string) {
            this.errorMessage = message
        }
    }
})
