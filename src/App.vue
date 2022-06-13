<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/index'
import HelloWorld from './components/HelloWorld.vue'
const userStore = useUserStore()
const a = 123

const { getFullName, familyName } = storeToRefs(userStore)

type Person = {
    name: string
    height: number
}

interface UserStore {
    name: string
    age: number
}

// const unsubscribe = userStore.$onAction(({ after, onError }) => {
//   console.log(123)
//   after((result: any) => {
//     console.log('unsubscribe after', result)
//   })
//   onError((err) => {
//     console.log('unsubscribe err', err)
//   })
// })

// unsubscribe()

const checkValid = () => {
    // userStore.$patch({ name: 'wahaha' })

    userStore.$patch((state: Person | UserStore | any) => {
        state.familyName = 'li'
        // state.age = 1234
    })
    // userStore.$state = {
    //   a: 123,
    //   b: 999,
    // }
    // console.log(userStore.getFullName)
}
</script>

<template>
    <HelloWorld @check="checkValid" />
    <p>{{ getFullName('san') }}</p>
    <p>{{ familyName }}</p>
</template>

<style>
.p {
    height: 1px;
    width: 100px;
}
</style>
