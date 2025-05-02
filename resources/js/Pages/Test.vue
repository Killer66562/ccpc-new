<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { TestPageProps } from '../types'

const page = usePage<TestPageProps>();
</script>

<template>
    <h1>{{ page.props.message }}</h1>
</template>