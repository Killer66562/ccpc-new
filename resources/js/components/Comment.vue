<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Comment } from '../types';
import { ref } from 'vue';

const show = ref(false);

const props = defineProps<{
    comment: Comment, 
    showButton?: boolean
}>();

const f = useForm({
    reply: props.comment.reply ?? ""
});

const emits = defineEmits<{
    btnClicked: []
}>();
</script>

<template>
    <hr>
    <div class="fw-bold">標題: {{ comment.title }}</div>
    <div class="fw-bold">內文:</div>
    <p class="pre-line">{{ comment.content.trim() }}</p>
    <div class="btn-group pb-3">
        <button type="button" class="btn btn-primary btn-sm" @click="show = !show">回覆這個留言</button>
    </div>
    <form v-show="show">
        <div class="pb-3">
            <label class="form-label">回覆</label>
            <input type="text" class="form-control" v-model="f.reply">
        </div>
        <div class="btn-group pb-3">
            <button type="button" class="btn btn-primary btn-sm" @click="">回覆</button>
        </div>
    </form>
</template>

<style scoped>
.pre-line {
    white-space: pre-line;
}
</style>