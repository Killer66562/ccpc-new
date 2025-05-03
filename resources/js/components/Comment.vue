<script setup lang="ts">
import { Comment } from '../types';

defineProps<{
    comment: Comment, 
    showButton?: boolean
}>();

const emits = defineEmits<{
    btnClicked: []
}>();
</script>

<template>
    <hr>
    <div class="fw-bold">標題: {{ comment.title }}</div>
    <div class="fw-bold">內文:</div>
    <p><pre>{{ comment.content.trim() }}</pre></p>
    <div class="btn-group" v-if="showButton">
        <button type="button" class="btn btn-primary" @click="emits('btnClicked')">回覆</button>
    </div>
</template>