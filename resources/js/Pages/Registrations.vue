<script setup lang="ts">
import { ref } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';

const page = usePage()

const f = useForm({
    name: "", 
    sid: "", 
    university: "", 
    department: "", 
    tel: "", 
    email: "", 
    account: ""
});
</script>

<template>

</template>