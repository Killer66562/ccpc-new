<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
</script>

<template>
    <div id="main">
        <AppHeader data-bs-theme="dark" />
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
#main {
    min-height: 100vh;
}
</style>