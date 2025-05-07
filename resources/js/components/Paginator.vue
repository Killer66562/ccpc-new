<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    first: number, 
    last: number, 
    length: number, 
    current: number
}>();

const emits = defineEmits<{
    to: [page: number]
}>();

const start = computed(() => {
    if (props.current <= props.length) {
        return props.first;
    }
    else {
        return props.current;
    }
});

const end = computed(() => {
    if (props.last - props.current <= props.length) {
        return props.last;
    }
    else {
        return props.current + props.length - 1;
    }
});
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous" @click="emits('to', first)" :class="{ disabled: current <= first }">First</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous" @click="emits('to', current - 1)" :class="{ disabled: current <= first }">Prev</a></li>
            <li class="page-item" v-for="p in end-start+1" :key="p"><a class="page-link" href="javascript:void(0)" @click="emits('to', p)">{{ p }}</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous" @click="emits('to', current + 1)" :class="{ disabled: current >= last }">Next</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous" @click="emits('to', end)" :class="{ disabled: current >= last }">Last</a></li>
        </ul>
    </nav>
</template>