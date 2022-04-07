<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
let a = 123
function checkValid() {
  console.log('123')
}
</script>

<template>
  <HelloWorld @check="checkValid" />
</template>

<style></style>
