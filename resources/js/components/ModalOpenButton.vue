<script setup lang="ts">
defineProps<{
    id: string
}>();
</script>

<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${id}`">
        <slot></slot>
    </button>
</template>