<script setup lang="ts">
const emit = defineEmits(['check'])
// const props = defineProps({ aa: String })
const a = 1
const b = 1
// console.log(props)
function handleCheck() {
  emit('check')
}
</script>

<template>
  <div class="wrapper">
    <h1 v-if="a == 1" class="wrapper-h">{{ 123 }}</h1>
    <button
      v-else-if="a == 2"
      style="background-image: url(../assets/logo.png)"
      @click="handleCheck"
    >
      click
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
    top: 10px;
    position: absolute;
    width: 100px;
    height: 100px;
    margin-top: 15px;
    box-sizing: border-box;
    padding-top: 10px;

    .wrapper-h {
        color: #1234;
    }
}
</style>
