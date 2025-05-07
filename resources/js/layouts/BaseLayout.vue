<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import { toastErrors } from '../lib/utils';
import { usePage } from '@inertiajs/vue3';

const page = usePage();
toastErrors(page.props.errors);
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