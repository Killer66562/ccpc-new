<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Comment } from '../types';
import { ref } from 'vue';
import { route } from 'ziggy-js';

const show = ref(false);

const props = defineProps<{
    comment: Comment, 
    showButton?: boolean
}>();

const f = useForm({
    reply: props.comment.reply ?? ""
});

const reply = () => {
    f.put(route('comments.update', { comment: props.comment.id }), {
        onSuccess: () => {
            show.value = false;
            alert("回覆成功");
        }, 
        onError: () => {
            alert("回覆失敗");
        }
    })
}

const del = () => {
    const yes = confirm("你確定要刪除這個留言嗎");
    if (yes) {
        f.delete(route('comments.destroy', { comment: props.comment.id }), {
            onSuccess: () => {
                alert("刪除成功");
            }, 
            onError: () => {
                alert("刪除失敗");
            }
        });
    }
}
</script>

<template>
    <hr>
    <div class="fw-bold">標題: {{ comment.title }}</div>
    <div class="fw-bold">內文:</div>
    <p class="pre-line">{{ comment.content.trim() }}</p>
    <div class="fw-bold">回覆:</div>
    <p class="pre-line">{{ comment.reply?.trim() }}</p>
    <div class="btn-group pb-3" v-if="showButton">
        <button type="button" class="btn btn-primary btn-sm" @click="show = !show">回覆這個留言</button>
        <button type="button" class="btn btn-danger btn-sm" @click="del">刪除這個留言</button>
    </div>
    <form @submit.prevent="reply" v-show="show">
        <div class="pb-3">
            <label class="form-label">回覆</label>
            <textarea class="form-control" rows="5" v-model="f.reply"></textarea>
        </div>
        <div class="btn-group pb-3">
            <button type="submit" class="btn btn-primary btn-sm">回覆</button>
        </div>
    </form>
</template>

<style scoped>
.pre-line {
    white-space: pre-line;
}
</style>