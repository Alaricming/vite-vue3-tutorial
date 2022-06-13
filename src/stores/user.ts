import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            familyName: 'wang',
            age: 1000,
        }
    },
    actions: {
        setName(data: string) {
            this.name = data
        },
    },
    getters: {
        // getFullName(): string {
        //   return `wang ${this.name}`
        // },
        getFullName: (state): any => {
            return (name: string) => `${state.familyName} ${name}`
        },
    },
})
