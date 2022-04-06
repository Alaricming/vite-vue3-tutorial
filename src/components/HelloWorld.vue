<script setup lang="ts">
const emit = defineEmits(["check"])
const props = defineProps({ aa: String });
const a = 1
const b = 1
console.log(props)
function handleCheck() {
  emit('check')
}
</script>

<template>
  <h1 v-if="a == 1">{{ 123 }}</h1>
  <button v-else-if="a == 2" @click="handleCheck">click</button>
  <button v-else-if="a == 2" @click="handleCheck">click</button>
</template>

<style scoped></style>
