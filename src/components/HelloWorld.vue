<script setup lang="ts">
const emit = defineEmits(['check'])
function handleCheck() {
    emit('check')
}
</script>

<template>
    <div class="wrapper">
        <h1 class="wrapper-h">{{ 123 }}</h1>
        <button
            style="background-image: url('../assets/logo.png')"
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
    height: 100px;
    width: 100px;
    margin-top: 15px;
    box-sizing: border-box;
    padding-top: 10px;

    .wrapper-h {
        color: #1234;
    }
}
</style>
